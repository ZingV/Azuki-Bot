const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_SERVER"))
    return message.channel.send("You don't have permission")
  
  let user = message.mentions.users.first()
  if(!user)
    return message.channel.send("Please mentions the user!")
  
  db.delete(`money_${user.id}`)
  db.delete(`bank_${user.id}`)
  
  message.channel.send(`<a:b_yes:721969088813072425> | Cleared All ${user} Credits`)
}

exports.help = {
  name: "clearmoney",
  description: "Clear All Money To 0",
  usage: "clearmoney"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}