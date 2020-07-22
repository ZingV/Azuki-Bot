const Discord = require("discord.js");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  function getUserFromMention(mention) {
    if (mention.startsWith("<@") && mention.endsWith(">")) {
      mention = mention.slice(2, -1);

      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }

      return client.user.cache.get(mention);
    }
  }

  const user = message.mentions.users.first() || client.user;

  let gif = [
    "https://media.tenor.com/images/00a3cca756b4bbae191ac33ccc6d7bcf/tenor.gif",
    "https://cdn.weeb.sh/images/rJHLDT-Wz.gif",
    "https://cdn.weeb.sh/images/BkdyPTZWz.gif"
  ];

  var embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setImage(gif[Math.floor(Math.random() * gif.length)])
    .setTitle(`**${message.author.username}** Punch **${user.username}**`)
    .setTimestamp(new Date());

  message.channel.send(embed);
};

exports.help = {
  name: "punch",
  description: "punch",
  usage: "punch, punch <@user>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
