const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")

exports.run = async (client, message, args) => {
  const amount = parseInt(args[0]);
  const result = Math.floor(Math.random() * 10);
  const bal = db.get(`money_${message.author.id}`);
  
  if(!amount)
    return message.channel.send("Please insert an amount");
  
  if(isNaN(amount))
    return message.channel.send("That was not a number");
  
  if(amount > bal || !bal || bal === 0) return message.channel.send("You don't have enough credits");
  
  if(amount < 200
}

exports.help = {
  name: "gamble",
  description: "Gambling",
  usage: "gamble <amount>"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}