const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
  
  if (!args[0]) return message.channel.send('Please input a calculation.');
  
  let resp;
  
  try {
    
    resp = math.evaluate(args.join(' '));
    
  } catch (e) {
    
    return message.channel.send('Sorry, please input a valid calculation.');
    
  }
  
  const embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTitle('Math Calculation')
    .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``)
  
  message.channel.send(embed);
  
}

exports.help = {
  name: 'math',
  description: "finish ur math problem",
  usage: "/math <amount> [*,/,+,-] <amount>",
  example: "/math 5*5"
}

exports.conf = {
  aliases: ["calc"],
  cooldown: 5
}