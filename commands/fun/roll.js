const { MessageEmbed } = require("discord.js")

exports.run = async(client, message, args) => {
  let result = Math.floor(Math.random() * 6);
  
  if (result == 0) {
    let embed = new MessageEmbed()
    .setColor("00ff00")
    .setDescription(``)
  }
}