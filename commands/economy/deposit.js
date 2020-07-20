const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let amount = parseInt(args[0])
  if(!amount)
    return message.channel.send("Please insert an amount")
  
  if(amount > bal || !bal ||
  
  db.subtract(`money_${message.author.id}`, amount)
  
  message.channel.send(`Successfully Deposit 💴 **${amount}** To The Bank`)
  
  db.add(`bank_${message.author.id}`, amount)
}

exports.help = {
  name: "deposit",
  description: "Deposit ur money to bank",
  usage: "deposit <amount>"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}