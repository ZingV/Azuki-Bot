const Discord = require("discord.js");
const Canvacord = require("canvacord");
const canva = new Canvacord();

exports.run = async (client, message, args) => {

  let avatar = message.mentions.users.first() || message.author;
  let image = await canva.blur(avatar.displayAvatarURL({ dynamic: false, format: "png" }));
  let attachment = new Discord.MessageAttachment(image, "blur.gif");
  return message.channel.send("Took 1-3 seconds", attachment);
};

exports.help = {
  name: "blur",
  description: "Making avatar blur",
  usage: "blur, blur <@user>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
