const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("../../config.json");
exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      "<a:b_no:721969465205588048> | Please enter country you want to see stats!"
    );

  if (args.join(" ") === "all") {
    let song = args[0];
    fetch(`https://lyrics-api.powercord.dev/lyrics?input=${song}`)
      .then(res => res.text())
      .then(json => {
        var info = JSON.parse(json);
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .addField()
          .setTimestamp();
        message.channel.send(embed);
      });
  }
};

exports.help = {
  name: "lyrics",
  description: "Watch Lyrics of music",
  usage: "lyrics <song>",
  example: "/covid all, /covid id"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
