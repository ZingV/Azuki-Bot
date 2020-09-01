const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const user = message.mentions.users.first()
    if (!user) return message.reply("Please mention someone!")
    
    let blacklist = await db.fetch(`blacklist_${user.id}`)
    
    if (blacklist === "Not") {
      db.set(`blacklist_${user.id}`, "Blacklisted") 
      message.channel.send(`The ${user} has been blacklisted from the bot!`)
    } else {
       db.set(`blacklist_${user.id}`, "Not") 
      message.channel.send(`Setup data for ${user}, please re blacklist!`)
}
}

exports.help = {
  name: "blacklist",
  description: "Blacklist user from the bot!",
  usage: "bl <@user>"
}

exports.conf = {
  aliases: ["bl"],
  cooldown: 0
}