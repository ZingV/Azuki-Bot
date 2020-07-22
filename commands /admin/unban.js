const Discord = require("discord.js");
const config = require("../../config.json");
const fetch = require("node-superfetch");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't use this commands."
    );

  let bannedMember = await client.users
    .fetch(args[0])
    .catch(err =>
      message.channel.send(
        "<a:b_no:721969465205588048> | Please enter his id for unban"
      )
    );

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No Reason Given";

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return (
      message.channel.send(
        "<a:b_no:721969465205588048> | I dont have permission to perform this command!"
      ) | message.delete()
    );
  
  message.guild.members
    .unban(bannedMember, { reason: reason })
    .catch(e => console.log(e.message));
  return message.channel.send(
    `<a:b_yes:721969088813072425> | **${bannedMember.tag}** has been unbanned from the guild!`
  );
};

exports.help = {
  name: "unban",
  description: "unbanning members from guilds",
  usage: "unban <id user>",
  example: "/unban 717230602159521822"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
