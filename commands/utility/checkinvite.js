const Discord = require("discord.js"),
      arraySort = require("array-sort"),
      table = require("table")

exports.run = async (client, message, args) => {
  let invites = await message.guild.fetchInvites().catch(error => {
    return message.channel.send("I Don't Have Permission To Check.")
  })
  
  invites = invites.array()
  
  arraySort(invites, 'uses', { reverse: true })
  
  let possibleInvites = [['User', 'Uses']];
  invites.forEach(function(invite) {
    possibleInvites.push([invite.inviter.username, invite.uses]);
  })
  
  const embed = new Discord.MessageEmbed()
  .setColor(client.config.color)
  .setAuthor('Server Invites', message.guild.iconURL())
  .setImage('https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif')
  .setDescription(`Leadeboard\n\`\`\`${table.table(possibleInvites)}\`\`\``)
  .setFooter('All Invites Will Releated In This Leaderboard', client.user.displayAvatarURL())
  .setTimestamp(new Date())
  
  message.channel.send(embed)
  
  }

exports.help = {
  name: "checkinvites",
  description: "Check uses invite link",
  usage: "checkinvites"
  }

exports.conf = {
  aliases: [],
  cooldown: 2
  }