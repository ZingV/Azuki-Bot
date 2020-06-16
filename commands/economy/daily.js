const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json")
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  let timeout = 86400000;
  let amount = 1200;

  let daily = await db.fetch(`daily_${message.author.id}`);

  if (daily != null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
    message.channel.send(
      `You already collected your daily reward, you can come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`
    );
  } else {
    let embed = new Discord.MessageEmbed()
      .setAuthor(`Daily`, message.author.displayAvatarURL)
      .setColor(config.color)
      .setDescription(`**Daily Rewards**`)
      .addField(`Collected`, amount);
    message.channel.send(embed);

    db.add(`money_${message.author.id}`, amount);
    db.add(`daily_${message.author.id}`, Date.now());
  }
};

exports.help = {
  name: "daily",
  description: "get daily coins",
  usage: "daily",
  example: "/daily"
};

exports.conf = {
  aliases: ["d"],
  cooldown: 0
};
