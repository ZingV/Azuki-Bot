const config = require("../config.json");
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = client => {
  console.log(`${client.user.tag} The bot is ready!`);

client.snipes = new Map();
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    avatar:message.author.displayAvatarURL(),
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})
  

  client.on("message", async message => {
    if(message.author.bot) return;
    if(!message.guild.id) return
    
    let prefix = config.prefix;

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
