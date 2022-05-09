const fs = require('fs')


const generateEnv = (discordToken) => {
    fs.writeFileSync('.env', `DISCORD_TOKEN=${discordToken}`)
}

module.exports = generateEnv;
