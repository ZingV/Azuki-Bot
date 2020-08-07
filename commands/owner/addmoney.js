const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id !== "583649910092595232") return
  if (!message.member.hasPermission("MANAGE_SERVER"))
    return message.channel.send("You don't have permission");
  
  let user = message.mentions.users.first();
  if(!user)
    return message.channel.send("Please mentions the user!")

  let amount = args[1];
  if(!amount) return message.channel.send("Please specify amount")
  
  db.add(`money_${user.id}`, amount);

  message.channel.send(
    `<a:b_yes:721969088813072425> | Successfully Added 💴 **${amount}** To ${user}`
  );
};

exports.help = {
  name: "addmoney",
  description: "Adding money to ur balance",
  usage: "addmoney <amount>"
};

exports.conf = {
  aliases: ["cheat"],
  cooldown: 0
};
