const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")

exports.run = async (client, message, args) => {
  if(!args[0])
    return message.channel.send("Please insert the name.")
  const result = Math.floor(Math.random() * 100);
  const user = args.slice(0).join(" ") && args.shift().toLowerCase();
  const users = args.slice(1).join(" ") && args.shift().toLowerCase();

  if(user === NaN) user = 
  
  if(result < 50) {
    return message.channel.send(`${user} + ${user} = __${result}%__ of Love 💔`);
  } else if (result > 5) {
    return message.channel.send(`${user} + ${user} = __${result}%__ of Love 💝`)
  }
  
  
}

exports.help = {
  name: "lovecalc",
  description: "Love calculator",
  usage: "lc <soul mate>"
}

exports.conf = {
  aliases: ["lc"],
  cooldown: 2
}