const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author;
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(`<:greentick:719865049920831548> | ${user} have **${warnings}** warnings`);
  }
