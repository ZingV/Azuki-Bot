const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  if(args[0] === "add") {
    let word = args.slice(3)
    
    if(!word)
      return message.channel.send("Please input the word!")
  }
  
  if(args[0] === "list") {
    
  }
  
  if(args[0] === "remove") {
    
  }
  
  else {
  let embed = new Discord.MessageEmbed()
  .setColor("#00bfff")
  .setAuthor("Badword System", message.guild.iconURL())
  .addField("add", `\`\`\`Add word to blacklist\`\`\``)
  .addField("list", `\`\`\`Show all list badword\`\`\``)
  .addField("remove", `\`\`\`Remove word from blacklist\`\`\``)
  .setFooter(`This Command Under Development By ${client.config.owners.username}`)
  
  message.channel.send(embed)
  }
}

exports.help = {
  name: "badword",
  description: "Badword system",
  usage: "badword add <word>, badword list, badword remove"
}

exports.conf = {
  aliases: ["bw"],
  cooldown: 3
}