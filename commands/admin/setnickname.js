const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  // You can make a single array to detect the user permissions.
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send("<a:b_no:721969465205588048> | You can't use this command!")
  }
  
  let user = message.mentions.users.first(); // You can mention someone, not only just user.
  if (!user) return message.channel.send("<a:b_no:721969465205588048> | You need to mention the user!");
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send("<a:b_no:721969465205588048> | You need to input the nickname!");
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(e => message.channel.send("Something error"))
  return message.channel.send(`<a:b_yes:721969088813072425> | Successfully changed **${user.tag}** nickname to **${nick}**`);
}

exports.help = {
  name: "setnickname",
  description: "Set a user nickname.",
  usage: "setnickname <@user> <nick>",
  example: "/setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["setnick"],
  cooldown: 5
}
