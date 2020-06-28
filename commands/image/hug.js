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
    "https://media.tenor.com/images/1e058dc8d0ccd337b6d26cbab43b6e30/tenor.gif",
    "https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif",
    "https://media.tenor.com/images/9d43ab74529bb6814a6d406a5d26e1cc/tenor.gif"
  ];

  var embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setImage(gif[Math.floor(Math.random() * gif.length)])
    .setAuthor(`${message.author.username} Hug ${user.username}`)
    .setTimestamp(new Date());

  message.channel.send(embed);
};

exports.help = {
  name: "hug",
  description: "hugging",
  usage: "hug, hug <@user>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
