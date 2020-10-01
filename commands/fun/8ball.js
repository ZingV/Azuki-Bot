const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
const pertanyaan = args.join(" ")

if(!pertanyaan) return message.channel.send('Give me questions!')

const responses = [
    "Yes",
    "Maybe yes, Maybe no",
    "Literally, i don't care",
    "Probably",
    "I don't know",
    "Unprobably",
    "No"
    ] // These are only some responses of 8ball, add other ones if you want.
const randomResponse = Math.floor(Math.random() * (responses.length - 1) + 1);

const embed = new Discord.MessageEmbed()
.setAuthor('Magic 8Ball', client.user.displayAvatarURL())
.setColor('#00bfff')
.addField(`❓ **Question:**`, `\`\`\`${message}\`\`\``)
.addField(`❗ **Answer:**`, `\`\`\`${responses[randomResponse]}\`\`\``)
.setFooter(`Request by ${message.author.tag}`)
.setTimestamp()
message.channel.send(embed)
}

exports.help = {
  name: "8ball",
  description: "Give some question, the bot will reply!",
  usage: "8ball <questions>"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}