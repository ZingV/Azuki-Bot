const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  if(!client.config.owners.includes(message.author.id));
  return message.channel.send("<a:b_no:721969465205588048> | Only owner bot can using this command!")
    
  let amount = args[0]
  let user = message.mentions.users.first() || message.author;
  
  db.add(`money_${message.author.id}`, amount);
  
  message.channel.send(`Successfully Added 💴 **${amount}** To ${user}`)
}

exports.help = {
  name: "addmoney",
  description: "Adding money to ur balance",
  usage: "addmoney <amount>"
}

exports.conf = {
  aliases: ["cheat"],
  cooldown: 0
}