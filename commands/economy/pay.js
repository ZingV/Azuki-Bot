const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client,message, args) => {
		let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.author.id}`)


    if (user.bot || user === client.user) {
    return message.channel.send(
      "<a:b_no:721969465205588048> | This user is a bot"
    );
  }
    
    if (!user) {
        return message.channel.send('you forgot to mention somebody.')
    }
    if (!args[1]) {
        return message.channel.send('Please specify an amount.')
    }
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negative money can not be paid.')
    }

    if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }

    message.channel.send(`${message.author.tag}, You successfully paid ${user.user.username} 💴 ${args[1]} Credits`)
    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${message.author.id}`, args[1])

	}

exports.help = {
  name: "pay",
  description: "paying people",
  usage: "pay <mention> <amount>",
  example: "/pay @McDunaldz 100"
};

exports.conf = {
  aliases: [""],
  cooldown: 5
};
