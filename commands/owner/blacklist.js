const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id !== "583649910092595232") return message.channel.send("You don't have permission!")
  const user = message.mentions.users.first()
    if (!user) return message.reply("Please mention someone!")
    
    let blacklist = await db.fetch(`blacklist_${user.id}`)
    
    if (blacklist === "Not") {
      db.set(`blacklist_${user.id}`, "Blacklisted") 
      message.channel.send(`The ${user} has been blacklisted from the bot!`)
    } else if (blacklist === "Blacklisted") {
      message.channel.send(`${user} already blacklisted!`)
    } else {
      db.set(`blacklist_${user.id}`, "Not") 
      message.channel.send(`Setup data failed to ${user}, please re-blacklist!`)
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