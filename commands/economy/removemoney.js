const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first()
  if(!user)
    return message.channel.send("Please mention the user")
  
  let amount = args[1];
  if(!amount)
    return message.channel.send("Please specify amount")
  
  db.subtract(`money_${user.id}`, amount)
  
  message.channel.send(`<a:b_yes:721969088813072425> | Successfully removed 💴** ${amount}** From ${user}`)
}

exports.help = {
  name: "removemoney",
  description: "Removing Money From User!",
  usage: "removemoney <@user> <amount>"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}