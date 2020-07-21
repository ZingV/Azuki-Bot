const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance


    if (!user) {
        return message.channel.send('Sorry, you forgot to mention somebody.')
    }
    if (author < 250) { // if the authors balance is less than 250, return this.
        return message.channel.send('You need atleast 💴 250 Credits to rob somebody.')
    }

    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`${user.user.username} does not have anything to rob.`)
    }


    let random = Math.floor(Math.random() * 1000) + 1; // random number 200-1, you can change 200 to whatever you'd like

    message.channel.send(`${message.author} you robbed ${user} and got away with 💴 **${random}**!`)

    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)
}

exports.help = {
  name: "rob",
  description: "Robbing cash",
  usage: "rob <@user>"
}

exports.conf = {
  aliases: [],
  cooldown: 2
}