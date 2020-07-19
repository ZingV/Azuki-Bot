const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let amount = args[0]
  if(!amount)
    return message.channel.send("Please insert an amount")
  
  db.subtract(`bank_${message.author.id}`, amount)
  
  message.channel.send(`Successfully Withdraw 💴 **${amount}** To The Cash`)
  
  db.add(`money_${message.author.id}`, amount)
}

exports.help = {
  name: "withdraw",
  description: "Withdraw ur money to cash",
  usage: "withdraw <amount>"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}