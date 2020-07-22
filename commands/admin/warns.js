const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author;
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(`<a:b_yes:721969088813072425> | ${user} have **${warnings}** warnings`);
  }

exports.help = {
         name: "warns",
         description: "count warnings on users",
         usage: "warns <@mentions>",
         example: "/warns @McDunaldz",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};