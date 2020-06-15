const Discord = require("discord.js");
const config = require("../../config.json");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send(
      "<a:b_no:721969465205588048> | You do not have permission to perform this command!"
    );

  let banMember =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!banMember)
    return message.channel.send(
      "<a:b_no:721969465205588048> | Please mention the users!"
    );

  if (banMember.id === message.author.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't softban ur self"
    );
  if (banMember.id === client.user.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't ban me"
    );
  if (banMember.id === "583649910092595232")
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't softban my owner"
    );

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason given!";

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send(
      "<a:b_no:721969465205588048> | I dont have permission to perform this command"
    );

  banMember
    .send(
      `<:greentick:719865049920831548> | You have been banned from ${message.guild.name} for: ${reason}`
    )
    .then(() => message.guild.ban(banMember, { days: 1, reason: reason }))
    .then(() => message.guild.unban(banMember.id, { reason: "Softban" }))
    .catch(err => console.log(err));
  message.channel.send(
    "<:greentick:719865049920831548> | The users got softban"
  );
};

exports.help = {
  name: "softban",
  description: "softbanning members",
  usage: "/softban <@mentions> <reason>",
  example: "/softban @McDunaldz Raid"
};

exports.conf = {
  aliases: [""],
  cooldown: 5
};
