"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
// import commands from "./commands.json"
var client = new Discord.Client();
client.on('ready', function () {
    console.log("Connected as " + client.user.tag);
    if (process.platform == "darwin") {
        client.user.setPresence({ activity: { name: 'with the code' } });
    }
});
client.on("message", function (m) {
    if (m.author == client.user)
        return;
    if (m.content.includes('bot!')) {
        m.channel.send("What do you want???");
    }
    if (m.content.includes('go away')) {
        m.channel.send('O, okay then... :sob:');
    }
    if (m.content == 'beckett is...') {
        m.channel.send('who is this becket?');
    }
    // if (m.content.startsWith("!")) {
    //     processCommand(m)
    // }
    if (m.content == "npm start") {
        processCommand(m, true);
    }
});
var allowedRoles = [
    "IT guys",
    "Barely know what their doing",
    "Admin"
];
var processCommand = function (m, returned) {
    var c = m.toString().split(' ')[0].replace('!', '');
    // console.log(message.guild.roles.cache)
    var a = m.member.roles;
    //@ts-ignore
    log(m.member.toString(), m.channel, returned);
    // var b = a.filter(role => {
    //     log(role.id + role.name, m.channel, returned);
    //     // role.name in allowedRoles
    // })
    // log(a, m.channel, returned);
    // console.log(a);
    // if (message.member.roles.some(r => ["Student", "Teacher", "Admin"].includes(r.name))) {
    //     console.log(message.member);
    // }
};
var log = function (obj, channel, send) {
    if (send)
        channel.send(obj);
    else
        console.log(obj);
};
if (process.platform == "darwin") {
    process.env.TOKEN = require('./token.json').token;
}
client.login(process.env.TOKEN)["catch"](function (e) {
    console.log(e);
});
// setTimeout(() => {
//     process.exit()
// }, 10000);
