const Discord = require ("discord.js");

exports.run = async (client, message, args) => {
  if(message.author.id !== "583649910092595232") return
  
  const name = client.guilds.cache.map(a => a.name)
  
  let embed = new Discord.MessageEmbed()
  .setColor("#00bfff")
  .setAuthor(`${client.user.username} Server List [${client.guilds.cache.size}]:`)
  .setDescription(`**${name}**`)
  .setTimestamp(new Date())
  .setImage("https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif")
  
  message.channel.send(embed)
}

exports.help = {
  name: "serverlist",
  description: "Server list",
  usage: "serverlist"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}