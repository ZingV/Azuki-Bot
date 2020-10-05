const discord = require("discord.js");
const db = require("quick.db");

exports.run = async(client, message, args) => {
  let mt = db.fetch(`mt_`)
  
  if (args[0] == "on") {
    
  if (mt === "on") {
    db.set(`mt_`, "on")
    message.channel.send("Ok! Right now, bot is under Maintenance!")
  }
} else if (args[0] == "off") {
    db.set(`mt_`, "off")
    message.channel.send("Ok! Right now, Maintenance removed!")
  }
};

exports.help = {
  name: "maintenance",
  description: "Make bot Maintenance or no",
  usage: "mt <on/off>"
}

exports.conf = {
  aliases: ["mt"],
  cooldown: 0
}