const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let items = db.get(message.author.id);
  let user = message.mentions.users.first || message.author;
  if (items === null) items = "nothing yet";
  let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s Inventory`)
    .addField("Inventory", items);
  message.channel.send(embed);
};

exports.help = {
  name: "inventory",
  description: "to check ur inventory",
  usage: "/inv",
  example: "/inv"
};

exports.conf = {
  aliases: ["inv"],
  cooldown: 0
};
