const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, ops) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "<a:b_no:721969465205588048> | You should have admin perms to use this command!"
    );
  }

  let user = message.mentions.members.first();

  if (!user) {
    return message.channel.send(
     "<a:b_no:721969465205588048> | Please Mention the person to who you want to warn - warn @mention <reaosn>"
      )};

  if (message.mentions.users.first().bot) {
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can not warn bots"
    );
  }

  if (message.author.id === user.id) {
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can not warn yourself"
    );
  }

  const reason = args.slice(1).join(" ");

  if (!reason) {
    return message.channel.send(
      "<a:b_no:721969465205588048> | Please provide reason to warn - warn @mention <reason>"
    );
  }

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
  if (warnings > 5) {
    // lebih dari 2
    user.ban({ reason: "More than 5 warnings!" });
    message.channel.send(`${user.tag} has been banned`);
  }

  if (warnings === null) {
    db.set(`warnings_${message.guild.id}_${user.id}`, 1);
    user.send(
      `<a:b_yes:721969088813072425> | You have been warned in **${message.guild.name}** for ${reason}`
    );
    await message.channel.send(
      `<a:b_yes:721969088813072425> | You warned **${
        message.mentions.users.first().username
      }** for ${reason}`
    ); //DO NOT FORGET TO USE ASYNC FUNCTION
  } else if (warnings !== null) {
    db.add(`warnings_${message.guild.id}_${user.id}`, 1);
    user.send(
      "<a:b_yes:721969088813072425> | You have been warned in **${message.guild.name}** for ${reason}"
    );
    await message.channel.send(
      `<a:b_yes:721969088813072425> | You warned **${
        message.mentions.users.first().username
      }** for ${reason}`
    ); //DO NOT FORGET TO USE ASYNC FUNCTION
  }
};

exports.help = {
         name: "warn",
         description: "give warning to users (max 5), after 5 the users will got banned",
         usage: "warn <@mentions> <reason>",
         example: "/warn @McDunaldz Spam",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};