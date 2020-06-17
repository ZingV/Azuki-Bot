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
          .send(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
          .then(i => i.delete({ timeout: 5000 }));
      }
    }

    if (authorStatus) {
      message.channel
        .send(`**${message.author.tag}** is no longer AFK.`)
        .then(i => i.delete({ timeout: 5000 }));
      afk.delete(message.author.id);
    }
  });
};
