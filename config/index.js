module.exports = {
    "credentials": {
        "type": "service_account",
        "project_id": "inscription-gamejam",
        "private_key_id": "2ab06f3f9801b5e0fe669a2c145004b44dd169c3",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCc/NhJG9yfDNgm\nxY86jQLvdKI/IKZdyxXXhH5u3zGh7uxRDUHEfZDZSYLbn/PBd5tc6gPOtKnxP8Gk\nC/rYMSVFL9/m9cL8ChQiBBhjd70xnCreaDRZ1UsjS1MHqIeFbEEHwl/7iL5DsrOQ\nNWXqVadCEhTlLtoUVNbjRXcHL6vt/gOmSBrLJt21f4n549ZUbAvSZynxw8xz1A1J\niScX9qMdldWfDJ8+/WVewEiXtCJkJl0M0Bie9yzbJ5LA45SlttnbUnZbRwE4NvD9\nNlM/JGc8B3GkG7nEhsvs1PdPlkH+gmWBwijwIHn2jymu3LsuPvgZ86iasSHxbONA\nAR0PuhNJAgMBAAECggEAXb6C7U1M9lE2NhjdCaqw6Qrt4+J8Vh/ywAqncU+olLlW\ntqPC9THCMG68TKf8aDgjN12qvmGV5bEb0fkxZq4aQnFvM7zoHZdrJFDru2ICQUCv\nPLZfJJHA16egQj96Bct6HccNh+fFLinlHiU04bUaNtMTVTQgF+n9lCOkC0+FTIzm\nYrQ1LKbiISh/DVYXRuBxVIFaIMtEQk4PIDZGa8dvK6CfkR4Or9VlzpFmd/TGf0q9\nxFBZ6YuBfExUnxW3io1SYvily8Ti+DZDoF9SxiBAyGAUEBKc+6nMqiBmyBDJxAMG\nLyOcmQifWhjaItaTBfAfZ4+2PPmafpGihA45BXc68QKBgQDNnkCaOJ2MBbqequ9b\ngWrAVukbeOC8y6YI2WPpzanENtusFvSdO7pifPV0W/cyUHu+OgG6Y82f7IlR9SXa\nj31X/8LsHjlT6PAhUMIT3ytFdcjZPVkFSbHFNWxdSb8gEyDWwllgyqIa1jsVRKPW\n4vAiFaftDopAscsOAQVE7MRZXQKBgQDDdCmLdwDGK4roe81j+08O8QgLYjmJ9Xi3\nzZgYxNel6WQTSteOX6Bpnae1LBOBJyHe7e0eNeTJWACVuI2Ez7jAiuQmFFkWsSKj\nVNuU/+ljIe42BFH9HvPE2dlUyp+TtZ5C1T77zoKqs5upUffo6mbd+ServSKmqYE8\ngUbQwNfG3QKBgAtF1tLdsb2Afue+BVtl7/1VhngsG14eaB7qFDE4RktsmoSHyadp\nI+HMagSUGixW/0HBmmCmohpXdHvazdV6smuFqSEa0xfHmIqrC8jdHlkziOxoEZ5Z\nmPZv5F4E8gaHJfDAPPgyg8qm3hxfZAAe9v1XZJp5hpjfZnuBENHjjSw9AoGAdmSc\n7b/uFhw2DlE/vrpxzyktqEeddvXcY+oDoa1Ku1M+rXj+TV2be55mAhZq0ib0G2ef\n5Fbc+SF3aTnbb4Gr9eWsAWz98gLmam1yfTTvGH9rHglL6LmhC7KyNOxv8TdoYC9v\n8XPMLr6RIeVm+A1UtkzAPQVaQf4XLKFaVgUaL3kCgYEAoM+nIIYJGIVNpEg26Ho8\njXDSqB6mZuoYy8UvL0tvKn86Up/LAFFNKaVj51bPNFxUcgS6Q0CaNwFMJpH+bVcy\npcw4kIqaRVYJJ+hL1kfiZa1v4gSjfyjKH2O90YKOj3S7G9xSTwCBqrFcz8O7QWk3\n2WlOJxDHa4iwZKXI8wIJGsc=\n-----END PRIVATE KEY-----\n",
        "client_email": "639416529139-compute@developer.gserviceaccount.com",
        "client_id": "109718449299923913071",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/639416529139-compute%40developer.gserviceaccount.com"
    },
    "smtp": {
        "host": "smtp.utt.fr",
        "port": 25,
        "auth": {}
    },
    "etupay": {
        "id": 6,
        "url": "https://etupay.utt.fr/initiate",
        "key": process.env.ETUPAY_KEY || "1rn6ovE5QGhyde3ER/hyqwvcoEaf22h1XO4duPjXQuk="
    }
}
