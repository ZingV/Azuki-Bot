const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id !== "583649910092595232") return message.channel.send("You don't have permission!")
  const user = message.mentions.users.first()
    if (!user) return message.reply("Please mention someone!")
    
    let blacklist = await db.fetch(`blacklist_${user.id}`)
    
    if (blacklist === "Blacklisted") {
       db.set(`blacklist_${user.id}`, "Not") 
      message.channel.send(`${user} has been unblacklisted!`);
    } else if (blacklist === "Not") {
      message.channel.send(`${user} doesn't blacklisted!`)
    } else {
      db.set(`blacklist_${user.id}`, "Blacklisted")
      message.channel.send(`Setup data for ${user} failed, please re-whitelist!`)
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