const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (client, message, args) => {
  let Emojis = "";
  let EmojisAnimated = "";
  let EmojiCount = 0;
  let Animated = 0;
  let OverallEmojis = 0;

  function Emoji(id) {
    return client.emojis.get(id).toString();
  }

  message.guild.emojis.forEach(emoji => {
    OverallEmojis++;
    if (emoji.animated) {
      Animated++;
      EmojisAnimated += Emoji(emoji.id);
    } else {
      EmojiCount++;
      Emojis += Emoji(emoji.id);
    }
  });

  let Embed = new Discord.RichEmbed()
    .setTitle(`Emojis in ${message.guild.name}.`)
    .setDescription(
      `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
    )
    .setColor(config.color);

  message.channel.send(Embed);
};
