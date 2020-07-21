const config = require("../config.json");
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = client => {
  console.log(`${client.user.tag} The bot is ready!`);

  

  client.on("message", async message => {
    
    let pref = db.get(`prefix_${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = config.prefix; // If the server doesn't have any custom prefix, return default.
  } else {
    prefix = pref;
  }
    
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.channel.send(
        `👋 ${message.author} My prefix is \`${pref}\``
      );
    }

    let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();

    if (mentioned) {
      let status = await afk.fetch(mentioned.id);

      if (status) {
        message.channel.send(`**${mentioned.user.tag}** is AFK: **${status}**`);
      }
    }

    if (authorStatus) {
      message.channel.send(
        `Welcome back! **${message.author}** i removed your **AFK**`
      );
      afk.delete(message.author.id);
    }
  });
};
