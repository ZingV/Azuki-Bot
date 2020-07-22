const { MessageEmbed } = require("discord.js")
const config = require("../../config.json")

exports.run = async (client, message, args) => {
  const role = message.guild.roles.cache.size;
  
  let embed = new MessageEmbed()
  .addField("Roles", role)
  .setColor(config.color)
  .setTimestamp(new Date())
  
  message.channel.send(embed)
}

exports.help = {
  name: "rolecount",
  description: "count all roles",
  usage: "rolecount"
}

exports.conf = {
  aliases: ["rcount"],
  cooldown: 2
}