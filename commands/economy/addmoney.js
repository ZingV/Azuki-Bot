const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let amount = args[0];
  if (!amount) return message.channel.send("Please specify amount");

  let user = message.mentions.users.first() || message.author;

  db.add(`money_${message.author.id}`, amount);

  message.channel.send(
    `<a:b_yes:721969088813072425> | Successfully Added 💴 **${amount}** To ${user}`
  );
};

exports.help = {
  name: "addmoney",
  description: "Adding money to ur balance",
  usage: "addmoney <amount>"
};

exports.conf = {
  aliases: ["cheat"],
  cooldown: 0
};
