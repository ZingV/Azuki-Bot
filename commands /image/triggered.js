const Discord = require("discord.js");
const Canvacord = require("canvacord");
const canva = new Canvacord();

exports.run = async (client, message, args) => {

  let avatar = message.mentions.users.first() || message.author;
  let image = await canva.trigger(avatar.displayAvatarURL({ dynamic: false, format: "png" }));
  let attachment = new Discord.MessageAttachment(image, "triggered.gif");
  return message.channel.send("Took 5-10 seconds", attachment);
};

exports.help = {
  name: "triggered",
  description: "Making avatar triggered",
  usage: "triggered, triggered <@user>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
