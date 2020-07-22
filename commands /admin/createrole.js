const Discord = require("discord.js");

exports.run = async (client, message, args, color) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel
      .send(
        `**${message.author.username}, Sorry but you need \`MANAGE_ROLES\` Permission to use this command.**`
      )
      .then(m => m.delete(7000));
  if (!args[0])
    return message.channel.send(
      `<a:b_no:721969465205588048> | Invalid Argument! example : o.createrole <hexcode> <name>`
    );
  var hex = args[0];
  if (!hex) "#000000";
  message.guild.roles
    .create({
      data: { color: hex, name: args[1] }
    })
    .then(role => {
      message.channel.send(
        `<a:b_yes:721969088813072425> | **<@&${role.id}>, has been added**`
      );
    });
};

exports.conf = {
  aliases: ["crole"],
  cooldown: 2
};

exports.help = {
  name: "createrole",
  description: "you can make role with commands",
  usage: "createrole <hex> <rolename>"
};
