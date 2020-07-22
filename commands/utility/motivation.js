const motiv = require("motivation");
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, color) => {
 
  var kata = motiv.get();
  
 let embed = new Discord.MessageEmbed()
 .setTitle(`📚| Motivation`)
 .setDescription(`\`\`\`${kata.text}\`\`\``)
 .setColor("#00bfff")
 .setFooter(`Auhor : ${kata.author} | Request By : ${message.author.tag}`)
 message.channel.send(embed)
}

exports.help = {
  name: "motivation",
  description: "give you motivation!",
  usage: "motivation"
};

exports.conf = {
  aliases: ["quotes"],
  cooldown: 2 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}