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
    "https://media.tenor.com/images/361eee159dd5284867f9dd6e7761e83e/tenor.gif",
    "https://media.tenor.com/images/f4fe55de834960c603f09e1fea6a156d/tenor.gif",
    "https://media.tenor.com/images/dd5eec54225834561de131a8fc0fc6be/tenor.gif",
    "https://media.tenor.com/images/4f45bfe65fd9deb24d2222ce9080f530/tenor.gif",
    "https://media.tenor.com/images/5a73b5f316023b139521664f37d3f11b/tenor.gif",
    "https://media.tenor.com/images/e77bddd69e82447e0a13acc0053469de/tenor.gif",
    "https://media.tenor.com/images/d7afc6b3fe2611147e080f2bdf6e9957/tenor.gif"
  ];

  var embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setImage(gif[Math.floor(Math.random() * gif.length)])
    .setTitle(`**${message.author.username}** Hammering **${user.username}**`)
    .setTimestamp(new Date());

  message.channel.send(embed);
};

exports.help = {
  name: "hammer",
  description: "hammering",
  usage: "hammer, hammer <@user>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
