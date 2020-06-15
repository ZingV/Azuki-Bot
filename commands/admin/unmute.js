const Discord = require("discord.js")
const config = require("../../config.json");


const superagent = require("superagent")


module.exports.run = async (client, message, args) => {
// check if the command caller has permission to use the command
if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("<:redtick:719865119277842492> | You dont have permission to use this command.");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("<:redtick:719865119277842492> | I don't have permission to add roles!")

//define the reason and unmutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("<:redtick:719865119277842492> | Please mention the users to be unmuted!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

//define mute role and if the mute role doesnt exist then send a message
let muterole = message.guild.roles.cache.find(r => r.name === "Muted")
if(!muterole) return message.channel.send("<:redtick:719865119277842492> | There is no mute role to remove!")

//remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
mutee.roles.remove(muterole.id).then(() => {
    message.delete()
    mutee.send(`<a:b_yes:721969088813072425> | You have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
    message.channel.send(`<a:b_yes:721969088813072425> | **${mutee} SPEAK**!`)
})
};

exports.help = {
         name: "unmute",
         description: "unmute members guilds",
         usage: "/unmute <@mentions>",
         example: "/unmute @McDunaldz",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};