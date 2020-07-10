const Discord = require("discord.js");
const Canvacord = require("canvacord");
const canva = new Canvacord();

exports.run = async (client, message, args) => {
  message.channel.startTyping({ timeout: 10 })
  let avatar = message.author.displayAvatarURL({
    dynamic: false,
    format: "png"
  });
  let image = await canva.trigger(avatar);
  let attachment = new Discord.MessageAttachment(image, "triggered.gif");
  return message.channel.send(attachment);
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
