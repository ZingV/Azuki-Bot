const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  const channel = message.guild.channelCount
  
  
}

exports.help = {
  name: "channelcount",
  description: "count all channels",
  usage: "channelcount"
}

exports.conf = {
  aliases: ["ccount"],
  cooldown: 5
}