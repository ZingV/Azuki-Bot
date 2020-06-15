const Discord = require("discord.js");
const config = require("../config.json");
const fetch = require("node-superfetch");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send(
      "<:redtick:719865119277842492> | You dont have permission to perform this command!"
    );

  let bannedMember = await client
    .fetchUser(args[0])
    .catch(err =>
      message.channel.send(
        "<:redtick:719865119277842492> | Please enter his id for unban!"
      )
    );

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No Reason Given";

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return (
      message.channel.send(
        "<:redtick:719865119277842492> | I dont have permission to perform this command!"
      ) | message.delete()
    );
  try {
    message.guild.unban(bannedMember, { reason: reason });
    message.channel.send(
      `<:greentick:719865049920831548> | **${bannedMember.tag}** has been unbanned from the guild!`
    );
  } catch (e) {
    console.log(e.message);
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