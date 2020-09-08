const db = require("quick.db");

exports.run = async(client, message, args) => {
  
  
  
  if(args[0] === "add") {
  let word = args.slice(3)
  
  if(!word)
    return message.channel.send("Please input the word!")
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