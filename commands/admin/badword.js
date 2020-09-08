const db = require("quick.db");

exports.run = async(client, message, args) => {
  if(!client.config.owners.includes(message.author.id)) return message.channel.send("Command under development")
  
  if(args[0] === "add") {
    let word = args[1]
    
    if(!word) return message.channel.send("Input the word!")
    
    db.push(`bl_${message.guild.id}`, word)
    
    message.channel.send(`\`${word}\` has been added to badword`)
  }
  
  if(args[0] === "list") {
    let bw = db.fetch(`bl_${message.guild.id}`)
    
    message.channel.send(bw.join(" | "))
  }
  
}

exports.help = {
  name: "badword",
  description: "Blacklist Word From Guild Server",
  usage: "badword add <word>, badword delete, badword list, badword remove <word>"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}