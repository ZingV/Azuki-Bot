const Discord = require('discord.js')

exports.run = (client, message, args) => {
  const input = args[0]
  if(!input) return message.channel.send("Choose __rock, paper & scissors!__");
  if (input.toLowerCase() == 'rock' || input.toLowerCase() == 'paper' || input.toLowerCase() == 'scissors') {
    const result = [
      'rock',
      'paper',
      'scissors'
    ]

    const picker = Math.floor(Math.random() * result.length)
    if (input.toLowerCase() == 'rock' && result[picker] == 'rock') {
      message.channel.send('I chose :punch: too!\n**It was a tie**!')
    } else if (input.toLowerCase() == 'paper' && result[picker] == 'paper') {
      message.channel.send('I chose :raised_hand: too!\n**It was a tie**!')
    } else if (input.toLowerCase() == 'scissors' && result[picker] == 'scissors') {
      message.channel.send('I chose :v: too!\n**It was a tie**!')
    }

    // If bot wins

    else if (input.toLowerCase() == 'scissors' && result[picker] == 'rock') {
      message.channel.send('I chose :punch:\n**I win**!')
    } else if (input.toLowerCase() == 'rock' && result[picker] == 'paper') {
      message.channel.send('I chose :raised_hand:\n**I win**!')
    } else if (input.toLowerCase() == 'paper' && result[picker] == 'scissors') {
      message.channel.send('I chose :v:\n**I win**!')
    }

    // If bot loses

    else if (input.toLowerCase() == 'rock' && result[picker] == 'scissors') {
      message.channel.send('I chose :v:\n**You win**!')
    } else if (input.toLowerCase() == 'paper' && result[picker] == 'rock') {
      message.channel.send('I chose :punch:\n**You win**!')
    } else if (input.toLowerCase() == 'scissors' && result[picker] == 'paper') {
      message.channel.send('I chose :raised_hand:\n**You win**!')
    }
  } else {
  }
}

exports.conf = {
  cooldown: '0',
  aliases: []
}

exports.help = {
  name: 'rps',
  description: 'Simple game of Rock Paper Scissors.',
  usage: 'rps <option>'
}
 