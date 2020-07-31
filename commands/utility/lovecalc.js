const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")

exports.run = async (client, message, args) => {
  const result = Math.floor(Math.random() * 100);
  
  if(result < 5) {
    return message.channel.send(``);
  } else if (result > 5) {
    return message.channel.send(``)
  }
  
  
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