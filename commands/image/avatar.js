const Discord = require("discord.js");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let msg = await message.channel.send("Generating Avatar.....");
  
  let user = message.mentions.users.first() || message.author();
  
  let embed = new Discord.MessageEmbed()
  
  .setImage(user.avatarURL)
  .setColor(config.color)
  .setAuthor("Avatar")
  .setFooter("Searched by " + message.author.tag)
  .setDescription("[Avatar URL Link](" + user.avatarURL + ")")
}

exports.help = {
  name: "avatar",
  description: "Searching avatar from users",
  usage: "/av, /av <@mentions>",
  example: "/av, /av @McDunaldz"
}

exports.conf = {
  aliases: ["av"],
  cooldown: 5
}