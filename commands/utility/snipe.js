const Discord = require('discord.js'),
      db = require("quick.db");

exports.run = async (client, message, args) => {
  let data = db.get(`snipe.${message.guild.id}`);
  if (!data) return message.channel.send("I don't see any stored deleted message here.");
  
  let content = data.content,
      user = data.user,
      channel = message.channel.id;
  
  const embed = new Discord.MessageEmbed()
  .setColor("#00bfff")
  .setTimestamp()
  .setTitle(`${user}`)
  .setDescription(`${content}`)
  message.channel.send(embed);
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