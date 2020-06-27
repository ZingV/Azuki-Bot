const Discord = require("discord.js")
const config = require("../../config.json")

exports.run = async (client, message, args) => {
  const guildName = client.guilds.cache.map(a => a.name)
  const guildId = client.guilds.cache.map(a => a.id)
  
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .addField(guildName)
  
  message.channel.send(embed)
}

exports.help = {
  name: "serverlist",
  description: "Check server list",
  usage: "serverlist"
}

exports.conf = {
  aliases: [""],
  cooldown: 0
}