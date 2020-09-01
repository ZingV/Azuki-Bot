
const Discord = require('discord.js'),
      db = require("quick.db");

exports.run = async (client, message, args) => {
  const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("I don't see any stored deleted message here.")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.avatar)
    .setColor("#00bfff")
    .setDescription(msg.content)
    .setTimestamp(new Date())
    if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
   
}

exports.help = {
  name: "snipe",
  description: "Shows the last deleted message.",
  usage: "snipe",
};

exports.conf = {
  aliases: [],
  cooldown: 10
}