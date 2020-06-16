const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (cliemt, message, args) => {
  const user = message.mentions.members.first();

  if (!user) {
    return message.channel.send(
      "<a:b_no:721969465205588048> | Please mention the person whose warning you want to reset"
    );
  }

  if (message.mentions.users.first().bot) {
    return message.channel.send(
      "<a:b_no:721969465205588048> | Bot are not allowed to have warnings"
    );
  }

  if (message.author.id === user.id) {
    return message.channel.send("<a:b_no:721969465205588048> | You are not allowed to reset your warnings");
  }

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

  if (warnings === null) {
    return message.channel.send(
      `${message.mentions.users.first().username} do not have any warnings`
    );
  }

  db.delete(`warnings_${message.guild.id}_${user.id}`);
  user.send(
    `<a:b_yes:721969088813072425> | Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`
  );
  await message.channel.send(
    `<a:b_yes:721969088813072425> | Reseted all warnings of ${
      message.mentions.users.first().username
    }`
  ); //DO NOT FORGET TO USE ASYNC FUNCTION
};

exports.help = {
         name: "rwarn",
         description: "reset all warnings on users",
         usage: "rwarn <@mentions>",
         example: "/rwarn @McDunaldz",
};

exports.conf = {
          aliases: ["rw"],
          cooldown: 5
};