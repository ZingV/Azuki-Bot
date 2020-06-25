const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("KICK_MEMBERS") ||
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send(
      "<a:b_no:721969465205588048> | You don't have a permissions to do this."
    );
  let user = message.mentions.users.first();

  let member = message.guild.member(user);
  let reason = args.slice(1).join(" ");

  if (!user)
    return message.channel.send(
      "<a:b_no:721969465205588048> | Please mention the user."
    );
  if (user.id === message.author.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't kick yourself."
    );
  if (user.id === client.user.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't kick me."
    );
  if (user.id === "583649910092595232")
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't kick my owner bot"
    );

  if (!reason) reason = "No reason provided";

  member
    .kick(reason)
    .then(() => {
      message.channel.send(
        `<a:b_yes:721969088813072425> | Successfully kicked **${user.tag}**`,
        {
          files: [
            {
              attachment:
                "https://media.tenor.com/images/2787aa841c08a878f6587f3fafc2d33e/tenor.gif",
              name: "kick.gif"
            }
          ]
        }
      );
    })
    .catch(err => {
      message.channel.send(
        "<a:b_no:721969465205588048> | I was unable to kick the member."
      );
    });
};

exports.help = {
  name: "kick",
  description: "kicking members on guilds",
  usage: "kick <@mentions>",
  example: "/kick @McDunaldz"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
