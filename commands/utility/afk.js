const Discord = require('discord.js'), db = require('quick.db');
const status = new db.table("AFKs");
const config = require("../../config.json")

exports.run = async (client, message, args) => {

let afk = await status.fetch(message.author.id);
const embed = new Discord.MessageEmbed().setColor(0xffffff)
    
  if (!afk) {
    message.channel.send(`${message.author.tag} i set your AFK: ${args.join(" ") ? args.join(" ") : "AFK"}`)
    status.set(message.author.id, args.join(" ") || `AFK`);
  } else {
    message.channel.send(`${message.author} You are no longer AFK.`);
    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
}

exports.help = {
         name: "afk",
         description: "make status afk on guilds",
         usage: "afk <@reason>",
         example: "/afk Sleeping",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};