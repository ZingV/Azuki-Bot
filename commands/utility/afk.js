const Discord = require("discord.js"),
  db = require("quick.db");
const status = new db.table("AFKs");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let afk = await status.fetch(message.author.id);

  if (!afk) {
    message.channel.send(
      `**${message.author}** i set your **AFK** to: ${
        args.join(" ") ? args.join(" ") : "AFK"
      }`
    );
    status.set(message.author.id, args.join(" ") || `AFK`);
  } else {
    message.channel.send(`**${message.author.tag}** You are no longer AFK.`);
    status.delete(message.author.id);
  }
};

exports.help = {
  name: "afk",
  description: "make status afk on guilds",
  usage: "afk <@reason>",
  example: "/afk Sleeping"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
