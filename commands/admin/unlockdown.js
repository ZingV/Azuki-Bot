const discord = require("discord.js")

exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    })
  var embed = new discord.MessageEmbed()
  .setColor("#00bfff")
  .setFooter(client.user.username, client.user.displayAvatarURL())
  .setTimestamp(new Date())
  .setDescription(`The lockdown for ${message.channel} has ended.`)
      message.channel.send(embed);
  };
exports.help = {
  name: 'unlockdown',
  description: 'This will unlock a channel down ',
  usage: 'unlockdown'
};

exports.conf = {
  aliases: ['unld'],
  cooldown: 5
 }