const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let money = db.fetch(`money_${user.id}`);

  if(user.bot || user === client.user) {
    return message.channel.send("<a:b_no:721969465205588048> | This user is a bot")
  }
  
  if (money === null) money = 0;

  var embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`**${user}** have 💴 **${money}** Credits`);

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
