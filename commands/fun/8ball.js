const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
const pertanyaan = args.join(" ")

if(!pertanyaan) return message.channel.send('You must write something.')

const responses = [
    "Yes",
    "Maybe yes, Maybe no",
    "Literally i don't"
    "Probably",
    "I don't know",
    "Unprobably",
    "No"
    ] // These are only some responses of 8ball, add other ones if you want.
const randomResponse = Math.floor(Math.random() * (responses.length - 1) + 1);

const embed = new Discord.MessageEmbed()
.setTitle('Magic 8Ball')
.setColor('RANDOM')
.setDescription(`❓ **Question:** \`\`\`${message}\`\`\`\n❗ **Answer:** \`\`\`${responses[randomResponse]}\`\`\``)
.setFooter(`Request by ${message.author.tag}`)
.setTimestamp()
message.channel.send(embed)
}