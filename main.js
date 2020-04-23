const Discord = require("discord.js");
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    if (process.platform == "darwin") {
        client.user.setPresence({ activity: { name: 'with the code' }, status: 'playing' })
    }
})

client.on("message", (m) => {
    if (m.author == client.user) return

    if (m.content.includes('bot!')) {
        m.channel.send("What do you want???")
    }
    if (m.content.includes('go away')) {
        m.channel.send('O, okay then... :sob:')
    }
    if (m.content.startsWith("!")) {
        processCommand(m)
    }
})

const processCommand = (message) => {
    const m = message.split(' ')[0]
    console.log(m);
}

if (process.platform == "darwin") {
    process.env.TOKEN = require('./token.json').token
}

client.login(process.env.TOKEN).catch(e => {
    console.log(e);
})
// setTimeout(() => {
//     process.exit()
// }, 6000);