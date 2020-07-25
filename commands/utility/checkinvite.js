const Discord = require("discord.js"),
      arraySort = require("array-sort"),
      table = require("table")

exports.run = async (client, message, args) => {
  let invites = await message.guilds.cache.fetchInvites().catch(error => {
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
  .setTitle('Server Invites')
  .addField('Leadeboard', `\`\`\`${table.table(possibleInvites)}\`\`\``)
  
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