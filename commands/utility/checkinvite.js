const Discord = require("discord.js"),
      arraySort = require("array-sort"),
      table = require("table")

exports.run = async (client, message, args) => {
  let invites = await message.guilds.fetchInvites().catch(error => {
    return message.channel.send("I Don't Have Permission To Check.")
  })
  
  invites = invites.array()
  
  arraySort(invites, 'uses', { reverse: true })
  
  let possibleInvites = [['User', 'Uses']];
  invites.forEach(function(invites) {
    possibleInvites.push(
  })
  
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