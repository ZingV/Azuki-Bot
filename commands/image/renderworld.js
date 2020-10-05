const discord = require("discord.js")
const config = require("../../config.json")

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send("Please input name world!")
  let world = args[0]
  
  try {
  let embed = new discord.MessageEmbed()
  .setColor(config.color)
  .setAuthor(`> Name World: ${world}`, "https://cdn.discordapp.com/emojis/727166288614522962.png?v=1")
  .setImage(`https://s3.amazonaws.com/world.growtopiagame.com/${world}.png`)
  .setFooter(`Request by ${message.author.tag} | ${client.user.username} V1.0.0`)
  
  message.channel.send(embed)
    
  } catch (e) {
    message.channel.send("Seem that world not rendered by owner world!")
  }
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