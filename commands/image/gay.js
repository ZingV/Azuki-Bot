const Discord = require("discord.js");
const Canvacord = require("canvacord");
const canva = new Canvacord();

exports.run = async (client, message, args) => {

  let avatar = message.mentions.users.first() || message.author;
  let image = await canva.gay(avatar.displayAvatarURL({ dynamic: false, format: "png" }));
  let attachment = new Discord.MessageAttachment(image, "gay.png");
  return message.channel.send("Took 1-3 seconds", attachment);
};

exports.help = {
  name: "gay",
  description: "Making avatar gay",
  usage: "gay, gay <@user>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
