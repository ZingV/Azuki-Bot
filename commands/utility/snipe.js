
const Discord = require('discord.js'),
      db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id !== "583649910092595232") return message.channel.send("This command under development!")
  const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("I don't see any stored deleted message here.")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.author.displayAvatarURL())
    .setColor("ffed00")
    .setDescription(msg.content)
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