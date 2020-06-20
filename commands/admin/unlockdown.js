exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`Damnn, **${message.author.username}** just locked the channel down. Don't worry, Admins will soon open the chat again so be patient.`);
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