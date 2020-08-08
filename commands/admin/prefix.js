const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send("You don't have any permissions to do this!");
  let data = db.get(`prefix_${message.guild.id}`);
  if (args[0] === "o.") {
    await db.delete(`prefix_${message.guild.id}`);
    return message.channel.send("The server prefix has been changed into default.")
  }
  if (args[0] === "default") {
    await db.delete(`prefix_${message.guild.id}`);
    return message.channel.send(
      "The server prefix has been changed into default."
    );
  }

  let symbol = args.join(" ");
  if (!symbol) return message.channel.send("Please input the prefix.");

  db.set(`prefix_${message.guild.id}`, symbol);
  return message.channel.send(
    `The server prefix has been changed to **${symbol}**`
  );
};

exports.help = {
  name: "prefix",
  description: "Custom Prefix On Guilds!",
  usage: "prefix <new prefix>"
};

exports.conf = {
  aliases: [],
  cooldown: 2
};
