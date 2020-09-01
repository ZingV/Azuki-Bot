const Discord = require("discord.js")
const config = require("../../config.json")

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  
  .setDescription("[Click Here](https://discordapp.com/oauth2/authorize?client_id=711662245565825064&scope=bot&permissions=8) **For invite the bot to ur server!**")
  .setColor(config.color)
  
  message.channel.send(embed)
}

exports.help = {
  name: "invite",
  description: "invite the bot to ur server!",
  usage: "invite",
  example: "/invite"
}

exports.conf = {
  aliases: ["invite"],
  cooldown: 2
}