const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:redtick:719865119277842492> | You don't have a permissions to do this.");
    let user = message.mentions.users.first();
    
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    
    if (!user) return message.channel.send("<:redtick:719865119277842492> | Please mention the user.");
    if (user.id === message.author.id) return message.channel.send("<:redtick:719865119277842492> | You can't kick yourself.");
    if (user.id === client.user.id) return message.channel.send("<:redtick:719865119277842492> | You can't kick me.");
  if (user.id === "583649910092595232") return message.channel.send("<:redtick:719865119277842492> | You can't kick my owner bot")
    
    if (!reason) reason = "No reason provided";
    
    member.kick(reason).then(() => {
      message.channel.send(`<:greentick:719865049920831548> | Successfully kicked **${user.tag}**`);
    }).catch(err => {
      message.channel.send("<:redtick:719865119277842492> | I was unable to kick the member.");
    })
  }

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