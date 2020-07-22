const Discord = require("discord.js");
const Canvacord = require("canvacord");
const canva = new Canvacord();

exports.run = async (client, message, args) => {

  let avatar = message.mentions.users.first() || message.author;
  let image = await canva.jail(avatar.displayAvatarURL({ dynamic: false, format: "png" }));
  let attachment = new Discord.MessageAttachment(image, "jail.png");
  return message.channel.send("Took 1-3 seconds", attachment);
};

exports.help = {
  name: "jail",
  description: "Making avatar jail",
  usage: "jail, jail <@user>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
