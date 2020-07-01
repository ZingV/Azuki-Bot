const fetch = require("superagent");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  fetch.get("https://some-random-api.ml/img/cat").then(x => {
    const catEmbed = new MessageEmbed()
      .setAuthor("CAT!")
      .setFooter(`Request by ${message.author.tag}`)
      .setTimestamp(new Date())
      .setColor("#00bfff")
      .setImage(x.body.link);
    message.channel.send(catEmbed);
  });
};

exports.help = {
  name: "cat",
  description: "Finding cat photos",
  usage: "cat"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
