const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (cliemt, message, args) => {
  const user = message.mentions.members.first();

  if (!user) {
    return message.channel.send(
      "<:redtick:719865119277842492> | Please mention the person whose warning you want to reset"
    );
  }

  if (message.mentions.users.first().bot) {
    return message.channel.send(
      "<:redtick:719865119277842492> | Bot are not allowed to have warnings"
    );
  }

  if (message.author.id === user.id) {
    return message.channel.send("<:redtick:719865119277842492> | You are not allowed to reset your warnings");
  }

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

  if (warnings === null) {
    return message.channel.send(
      `${message.mentions.users.first().username} do not have any warnings`
    );
  }

  db.delete(`warnings_${message.guild.id}_${user.id}`);
  user.send(
    `<:greentick:719865049920831548> | Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`
  );
  await message.channel.send(
    `<:greentick:719865049920831548> | Reseted all warnings of ${
      message.mentions.users.first().username
    }`
  ); //DO NOT FORGET TO USE ASYNC FUNCTION
};

exports.help = {
         name: "",
         description: "",
         usage: "",
         example: "",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};