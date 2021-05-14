const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsGAIA/');
const fs = require('fs');

async function whatsGAIA () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('GAIA')}
${chalk.white.italic('GAIAString Kodu Alıcı')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('GAIA String Kodunuz: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `GAIA_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz.')
        );
        process.exit(0);
    });

    await conn.connect();
}

whatsGAIA()
