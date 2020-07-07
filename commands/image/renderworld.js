const discord = require("discord.js")

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send("Please input name world!")
  let world = args[0]
  let embed = new discord.MessageEmbed()
  .setAuthor(`> Name World: ${world}`)
  .setImage(`https://s3.amazonaws.com/world.growtopiagame.com/${world}.png`)
  
  message.channel.send(embed)
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