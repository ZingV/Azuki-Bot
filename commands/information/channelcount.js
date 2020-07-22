const { MessageEmbed } = require("discord.js")
const config = require("../../config.json")

exports.run = async (client, message, args) => {
  const channel = message.guild.channels.cache.size;
  
  let embed = new MessageEmbed()
  .addField(`Channels`, channel)
  .setColor(config.color)
  .setTimestamp(new Date())
  
  message.channel.send(embed)
}

exports.help = {
  name: "channelcount",
  description: "count all channels",
  usage: "channelcount"
}

exports.conf = {
  aliases: ["ccount"],
  cooldown: 2
}