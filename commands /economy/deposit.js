const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  const amount = parseInt(args[0])
  const bal = db.get(`money_${message.author.id}`)
  
  if(!amount)
    return message.channel.send("Please insert an amount")
  
  if(amount > bal || !bal || bal === 0) return message.channel.send("You don't have enought credits to deposit")
  
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