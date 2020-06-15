const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, ops) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "<:redtick:719865119277842492> | You should have admin perms to use this command!"
    );
  }

  let user = message.mentions.members.first();

  if (!user) {
    return message.channel.send(
      "<:redtick:719865119277842492> | Please Mention the person to who you want to warn - warn @mention <reaosn>"
      )};

  if (message.mentions.users.first().bot) {
    return message.channel.send(
      "<:redtick:719865119277842492> | You can not warn bots"
    );
  }

  if (message.author.id === user.id) {
    return message.channel.send(
      "<:redtick:719865119277842492> | You can not warn yourself"
    );
  }

  const reason = args.slice(1).join(" ");

  if (!reason) {
    return message.channel.send(
      "<:redtick:719865119277842492> | Please provide reason to warn - warn @mention <reason>"
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
      `<:greentick:719865049920831548> | You have been warned in **${message.guild.name}** for ${reason}`
    );
    await message.channel.send(
      `<:greentick:719865049920831548> | You warned **${
        message.mentions.users.first().username
      }** for ${reason}`
    ); //DO NOT FORGET TO USE ASYNC FUNCTION
  } else if (warnings !== null) {
    db.add(`warnings_${message.guild.id}_${user.id}`, 1);
    user.send(
      "<:greentick:719865049920831548> | You have been warned in **${message.guild.name}** for ${reason}"
    );
    await message.channel.send(
      `<:greentick:719865049920831548> | You warned **${
        message.mentions.users.first().username
      }** for ${reason}`
    ); //DO NOT FORGET TO USE ASYNC FUNCTION
  }
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