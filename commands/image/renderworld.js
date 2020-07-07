const discord = require("discord.js")

exports.run = async (client, message, args) => {
  
}

exports.help = {
  name: "renderworld",
  description: "Rendering Growtopia Game World!",
  usage: "render <name world>"
}

exports.conf = {
  aliases: ["render"],
  cooldown: 2
}