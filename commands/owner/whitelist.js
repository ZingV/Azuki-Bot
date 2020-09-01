const db = require("quick.db");

exports.run = async (client, message, args) => {
  const user = message.mentions.users.first()
    if (!user) return message.reply("Please mention someone!")
    
    let blacklist = await db.fetch(`blacklist_${user.id}`)
    
    if (blacklist === "Blacklisted") {
       db.set(`blacklist_${user.id}`, "Not") 
      message.channel.send(`${user} has been unblacklisted!`);
    } else if (blacklist === "Not") {
      message.channel.send(`${user} doesn't blacklisted!`)
    }
}

exports.help = {
  name: "whitelist",
  description: "Whitelist user from the bot!",
  usage: "wl <@user>"
}

exports.conf = {
  aliases: ["wl"],
  cooldown: 0
}