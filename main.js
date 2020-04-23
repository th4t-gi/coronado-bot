const Discord = require("discord.js");
const client = new Discord.Client()
const TOKEN = require('./token.json').token

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on("message", (m) => {
    if (m.author == client.user) return

    if (m.content.includes('bot!')) {
        m.channel.send("What do you want???")
    }
    if (m.content.startsWith("!")) {
        processCommand(m)
    }
})

const processCommand = (message) => {
    const m = message.split(' ')[0]
    console.log(m);
}

client.login(TOKEN).catch(e => {
    console.log(e);
})
// setTimeout(() => {
//     process.exit()
// }, 6000);