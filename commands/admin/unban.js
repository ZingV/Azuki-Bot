const Discord = require("discord.js");
const config = require("../../config.json");
const fetch = require("node-superfetch");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send(
      "<a:b_no:721969465205588048> | You dont have permission to perform this command!"
    );

  if (args[0])
    return message.channel.send(
      "<a:b_no:721969465205588048> | Please enter his id for unban"
    );

  let bannedMember = await client.fetchUser(args[0]);

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No Reason Given";

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return (
      message.channel.send(
        "<a:b_no:721969465205588048> | I dont have permission to perform this command!"
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
  name: "unban",
  description: "unbanning members from guilds",
  usage: "/unban <id user>",
  example: "/unban 717230602159521822"
};

exports.conf = {
  aliases: [""],
  cooldown: 5
};
