const Promise           = require('bluebird');
const GoogleSpreadsheet = require('google-spreadsheet');
const express           = require('express');
const config            = require('../config');
const path              = require('path');
const etupay            = require('node-etupay')(config.etupay);
const Basket            = etupay.Basket;
const nodemailer        = require('nodemailer');
const mailer            = nodemailer.createTransport(config.smtp);

const PROCESS_INTERVAL = 12 * 60 * 60 * 1000; // 12 hour


/**
 * Script d'envoi de mail de paiement
 */

const doc = Promise.promisifyAll(new GoogleSpreadsheet('1utGDzrwT5JRPQOP1r74iWQPGI-xKTBpkDp7pMMMzC9U'));
let infos;
let sheet;
let rows;

function generateMail(mail, link) {
    const from    = 'noreply-gamejam@utt.fr';
    const to      = mail;
    const subject = 'Ta place pour la GameJam 2017';
    const html    = `Salut ! <br> Merci d'avoir pris ta place. Maintenant, il faut payer. <br> Tu peux régler en ligne en suivant <a href="${link}">ce lien !</a>`;

    return { from, to, subject, html };
}

async function processSheet() {
    console.log('Lecture de la feuille...');

    try {
        infos = await doc.getInfoAsync();
        sheet = Promise.promisifyAll(infos.worksheets[0]);
        rows = await Promise.promisifyAll(sheet.getRowsAsync());
    } catch (e) {
        console.error('Lecture de feuille raté:', e);
    }
    
    rows.forEach(async row => {
        if (!row.paiement) {
            const nomComplet = row["prénometnom"].split(' ');
            const prenom     = nomComplet[0];
            const nom        = nomComplet.length > 1 ? nomComplet[1] : '';
            const mail       = row["adressee-mail"];

            const basket = new Basket('GameJam 2017', prenom, nom, 
                mail, 'checkout', mail);
            basket.addItem('Place équipe complète', 100, 1);

            const link = basket.compute();

            console.log('Envoi du mail a', row["prénometnom"]);
            try {
                await mailer.sendMail(generateMail(mail, link));
                row.paiement = 'attente';
                await row.save()
            } catch (e) {
                console.error('Envoi de mail raté:', e);
            }
        } else {
            console.log(row["prénometnom"], 'est au status:', row.paiement);
        }
    });
}


/**
 * Serveur web
 */

const app = express();

app.use('/etupay', etupay.router);

app.get('/etupay/callback', async (req, res, next) => {
    let found = false;

    for (row of rows) {
        if (row["adressee-mail"].replace(/[^\w\s]/gi, '') == req.etupay.service_data) {
            row["paiement"] = req.etupay.paid ? 'payé' : 'annulé';

            try {
                await row.save();
                found = true;
                console.log(req.etupay.service_data, 'est passé à', row["paiement"]);
            }
            catch (e) {
                console.error('Impossible de sauvegarder la feuille:', e);
            }

            if (req.etupay.paid) {
                return res.sendFile(path.resolve(__dirname + '/../public/success.html'));
            } else {
                return res.sendFile(path.resolve(__dirname + '/../public/error.html'));
            }
        }
    };

    if (!found) {
        console.error(`Impossible de retrouver ${req.etupay.service_data}`);
    }

    return res.sendFile(path.resolve(__dirname + '/../public/error.html'));
});

// Gestion d'erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.sendFile(path.resolve(__dirname + '/../public/error.html'));
});


/**
 * Point d'entrée
 */

async function main() {
    await doc.useServiceAccountAuthAsync(config.credentials);
    setInterval(processSheet, PROCESS_INTERVAL);
    app.listen(8080);
    console.log('Serveur lancé');
}

main();


