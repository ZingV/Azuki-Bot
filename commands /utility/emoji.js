const Discord = require("discord.js");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let Emojis = "";
  let EmojisAnimated = "";
  let EmojiCount = 0;
  let Animated = 0;
  let OverallEmojis = 0;

  function Emoji(id) {
    return client.emojis.cache.get(id).toString();
  }

  message.guild.emojis.cache.forEach(emoji => {
    OverallEmojis++;
    if (emoji.animated) {
      Animated++;
      EmojisAnimated += Emoji(emoji.id);
    } else {
      EmojiCount++;
      Emojis += Emoji(emoji.id);
    }
  });

  let Embed = new Discord.MessageEmbed()
    .setTitle(`Emojis in ${message.guild.name}.`)
    .setDescription(
      `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
    )
    .setColor(config.color);

  message.channel.send(Embed);
};

exports.help = {
         name: "emoji",
         description: "to see all emoji in guilds",
         usage: "emoji",
         example: "/emoji",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};