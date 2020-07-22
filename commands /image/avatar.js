const Discord = require("discord.js");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let msg = await message.channel.send("Generating Avatar.....").then(d => d.delete({timeout: 1000}));
  
  let user = message.mentions.users.first() || message.author;
  
  let embed = new Discord.MessageEmbed()
  
  .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
  .setColor(config.color)
  .setAuthor(user.tag + " Avatar")
  .setFooter("Searched by " + message.author.tag)
  .setDescription("[Avatar URL Link](" + user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }) + ")")
  
  message.channel.send(embed)
}
exports.help = {
  name: "avatar",
  description: "Searching avatar from users",
  usage: "av, av <@mentions>",
  example: "/av, /av @McDunaldz"
}

exports.conf = {
  aliases: ["av"],
  cooldown: 2
}