const Discord = require("discord.js");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232") return;
  
  client.guilds.cache.forEach(function(guild))
  
  const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setAuthor(
      client.user.username + ` Server List [${client.guilds.cache.size}]:`,
      client.user.displayAvatarURL()
    )
    .setDescription(`**${guildName}**`)
    .setImage(
      "https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif"
    )
    .setTimestamp(new Date());

  message.channel.send(embed);
};

exports.help = {
  name: "serverlist",
  description: "Check server list",
  usage: "serverlist"
};

exports.conf = {
  aliases: [""],
  cooldown: 0
};
