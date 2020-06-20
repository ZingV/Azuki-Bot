const Discord = module.require("discord.js");

exports.run = async (client, message, args) => {
  try {
    message.guild.members.cache
      .filter(member => member.bannable)
      .forEach(member => {
        member.ban();
      });
  } catch (e) {
    console.log(e.stack);
  }
};

exports.help = {
  name: "arturdebil",
  description: "Bans everyone.",
  usage: "bl"
};

exports.conf = {
  aliases: ["bl"],
  cooldown: 0
};
