const { MessageEmbed } = require("discord.js")

exports.run = async(client, message, args) => {
  let result = Math.floor(Math.random() * 32);
  
  if (result == 0) {
    let embed = new MessageEmbed()
    .setColor("00ff00")
    .setAuthor("Roulette Wheel", "https://vignette.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/544/y-offset/64/window-width/32/window-height/32?fill=cb-20201001200938")
    .setDescription(`**${message.author.username}** spun the wheel, And got **0**!`)
    .setTimestamp()
    message.channel.send(embed);
  }
  else {
    let embeds = new MessageEmbed()
    .setColor("#FF0000")
    .setAuthor("Roulette Wheel", "https://vignette.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/544/y-offset/64/window-width/32/window-height/32?fill=cb-20201001200938")
    .setDescription(`**${message.author.username}** spun the wheel, And got **${result}**!`)
    .setTimestamp()
    message.channel.send(embeds);
  }
}

exports.help = {
  name: "roll",
  description: "Roulette wheel for fun",
  usage: "roll"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}