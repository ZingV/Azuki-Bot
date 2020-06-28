const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let money = db.fetch(`money_${user.id}`);

  if (money === null) money = 0;

  var embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`**${user}** have **${money}** coin`);

  message.channel.send(embed);
};

exports.help = {
  name: "balance",
  description: "balance ur money",
  usage: "bal <mention>",
  example: "/bal @mention someone"
};

exports.conf = {
  aliases: ["bal"],
  cooldown: 0
};
