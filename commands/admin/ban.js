const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("BAN_MEMBERS") ||
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send(
      "<a:b_no:721969465205588048> | You don't have a permissions to do this."
    );
  let user = message.mentions.users.first();

  let member = message.guild.member(user);
  let reason = args.slice(22).join(" ");

  if (!user)
    return message.channel.send(
      "<a:b_no:721969465205588048> | And who do you want me to kill?",
      {
        files: [
          {
            attachment: "https://i.imgur.com/RkIfjMP.gif",
            name: "ban.gif"
          }
        ]
      }
    );

  if (user.id === message.author.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't ban yourself."
    );
  if (user.id === client.user.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't ban me."
    );
  if (user.id === "583649910092595232")
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't ban my owner"
    );

  if (!reason) reason = "No reason provided";
  member
    .ban(reason)
    .then(() => {
      message.channel.send(
        `<a:b_yes:721969088813072425> | Successfully banned <@${user.id}>`,
        {
          files: [
            {
              attachment:
                "https://i.imgur.com/8d6Oakt.gif",
              name: "banned.gif"
            }
          ]
        }
      );
    })
    .catch(err => {
      message.channel.send(
        "<a:b_no:721969465205588048> | I was unable to ban the member."
      );
    });
};

exports.help = {
         name: "ban",
         description: "banning members on guilds",
         usage: "ban <@mentions>",
         example: "/ban @McDunaldz",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};
