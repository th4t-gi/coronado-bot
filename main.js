console.log('hiieeee');
const Discord = require("discord.js");

const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on("message", (m) => {
    console.log(m.content);
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

console.log("ENV:", process.env);
if (process.platform == "linux") {
    client.login(process.env.TOKEN)
}
// else if (process.platform == "darwin") {
//     const token = require('./token.json')
//     client.login(token.token)
// }
// setTimeout(() => {
//     process.exit()
// }, 6000);