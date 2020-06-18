const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

exports.run = async (client, message, args) => {
    if (message.author.id != config.owners) return message.reply("you do not have permission to use this command!")
    const user = message.mentions.users.first()
    if (!user) return message.reply("Please mention someone!")
    
    let blacklist = await db.fetch(`blacklist_${user.id}`)
    
    if (blacklist === "Not") {
      db.set(`blacklist_${user.id}`, "Blacklisted") 
      let embed = new Discord.MessageEmbed()
      .setColor(config.color)
      .setDescription(`${user} has been blacklisted!`)
      
      message.channel.send(embed)
    } else if (blacklist === "Blacklisted") {
       db.set(`blacklist_${user.id}`, "Not") 
      let embed = new Discord.MessageEmbed()
      .setColor(config.color)
      .setDescription(`${user} has been unblacklisted!`)
      
      message.channel.send(embed)
    } else {
       db.set(`blacklist_${user.id}`, "Not") 
      let embed = new Discord.MessageEmbed()
      .setColor(config.color)
      .setDescription(`Set up data for ${user}!`)
      .setFooter("Re execute the commands")
      
      message.channel.send(embed)
    }
  }

exports.help = {
  name: "blacklist",
  description: "blacklisting member",
  usage: "blacklist <@user>"
}

exports.conf = {
  aliases: ["bl"],
  cooldown: 0
}