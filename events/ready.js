const config = require("../config.json");
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = client => {
  console.log(`${client.user.tag} The bot is ready!`);

  let prefix = config.prefix;

  client.on("message", async message => {
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.channel.send(
        `👋 ${message.author} My prefix is \`${prefix}\``
      );
    }

    let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();

    if (mentioned) {
      let status = await afk.fetch(mentioned.id);

      if (status) {
        message.channel
          .send(`**${mentioned.user.tag}** is AFK: **${status}**`)
          .then(i => i.delete({ timeout: 1000 }));
      }
    }

    if (authorStatus) {
      message.channel.send(
        `Welcome back! **${message.author}** i removed your AFK.`
      );
      afk.delete(message.author.id);

      let blacklist = await db.fetch(`blacklist_${message.author.id}`);

      if (message.author.bot) return;
      if (!message.guild) return;
      if (!message.content.startsWith(prefix)) return;

      if (blacklist === "Blacklisted")
        return message.reply("You are blacklisted from the bot!");

      // If message.member is unca
    }
  });
};
