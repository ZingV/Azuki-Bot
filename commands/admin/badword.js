const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  if(args[0] === "add") {
    let a = db.fetch(`bl_${message.guild.id}`)
    
    let word = args.slice(3)
    
    if(!word)
      return message.channel.send("Please input the word!");
    
    db.push(`bl_${message.guild.id}`, word);
    
    message.channel.send(`\`${word}\` has been added to the list`)
  }
  
  if(args[0] === "delete") {
    db.delete(`bl_${message.guild.id}`)
    
    message.channel.send("Successfully delete all words!")
  }
  
  if(args[0] === "list") {
    let all = db.fetch(`bl_${message.guild.id}`)
    
    if(all ===n
    
    message.channel.send(all.join(", "))
  }
  
  if(args[0] === "remove") {
    
  }
  
}

exports.help = {
  name: "badword",
  description: "Badword system",
  usage: "badword add <word>, badword list, badword delete, badword remove <word>"
}

exports.conf = {
  aliases: ["bw"],
  cooldown: 3
}