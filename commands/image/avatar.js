const Discord = require("discord.js");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let msg = await message.channel.send("Generating Avatar.....");
  
  let user = message.mentions.users.first() || message.author();
  
  let embed = new Discord.MessageEmbed()
  
  .setImage(user.avatarURL)
  .setColor(config.color)
  .setAuthor("Avatar")
  .setFooter("Searched by " + message.author.tag();)
}

exports.help = {
  
}

exports.conf = {
  
}