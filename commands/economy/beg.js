const Discord = require("discord.js");
const ms = require("parse-ms");
const talkedRecently = new Set();
const config = require("../../config.json")
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let timeoutworked = 600000;
  let worked = db.fetch(`begged_${message.author.id}`);

  if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
    let time = ms(timeoutworked - (Date.now() - worked));
    message.channel.send(
      `<a:b_no:721969465205588048> | You have already begged please come back in **${time.minutes}m ${time.seconds}s**`
    );
  } else {
    let amountearned = Math.floor(Math.random() * 50) + 1;

    let jobs = [
      "Justin Bieber",
      "Ariana Grande",
      "Adele",
      "JT",
      "Your Mom",
      "Kim Kardashian",
      "Buddy from HR",
      "Raj"
    ];
    let job = jobs[Math.floor(Math.random() * jobs.length)];

    let embed = new Discord.MessageEmbed()
      .setColor(config.color)
      .setAuthor(
        `${message.author.tag}, your begging worked`,
        message.author.displayAvatarURL()
      )
      .setDescription(
        `${message.author}, ${job} donated 💴${amountearned} Credits`
      );

    message.channel.send(embed);

    db.add(`money_${message.author.id}`, amountearned);
    db.set(`begged_${message.author.id}`, Date.now());
  }
};

exports.help = {
  name: "beg",
  description: "beg and earn ur money",
  usage: "beg",
  example: "/beg"
};

exports.conf = {
  aliases: ["beg"],
  cooldown: 0
};
