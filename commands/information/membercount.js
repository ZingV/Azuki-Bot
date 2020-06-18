const Discord = require("discord.js")
const config = require("../../config.json")

exports.run = async (client, message, args) => {
  const total = message.guild.memberCount;

  let embed = new Discord.MessageEmbed()
  .addField(`Members`, total)
  .setColor(config.color)
  .setTimestamp(new Date())
  
  message.channel.send(embed)
}

exports.help = {
  name: "membercount",
  description: "count all members!",
  usage: "membercount"
}

exports.conf = {
  aliases: [""],
  cooldown: 0
}