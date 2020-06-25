const Discord = require("discord.js")

exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
  var embed = new Discord.MessageEmbed()
  .setColor("#00bfff")
  .setFooter(client.user.username, client.user.displayAvatarURL())
  .setTimestamp(new Date())
  .setDescription(`The ${message.channel} channel is now locked down.`)
      message.channel.send(embed);
  };
exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down ',
  usage: 'lockdown'
};

exports.conf = {
  aliases: ['ld'],
  cooldown: 2
 }