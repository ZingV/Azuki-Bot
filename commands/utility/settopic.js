exports.run = async (client, message, args) => {
  if(args[0]) return message.channel.send("")
  
  let topic = args[0]
  message.channel.setTopic(`${topic}`)
  
  message.channel.send(`Topic This Channels Changed To **${topic}**`)
}

exports.help = {
  name: "settopic",
  description: "Setting topic channels",
  usage: "topic <text>"
}

exports.conf = {
  aliases: ["topic"],
  cooldown: 5
}