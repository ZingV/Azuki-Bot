const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let roleDelete =
        message.guild.roles.cache.get(args[1]) ||
        message.guild.roles.cache.find((r) => r.name == args[1]);
      if (!roleDelete)
        return message.channel.send(
          `You did not specify the name or id of the role you wish to delete!`
        );
      roleDelete.delete();
      const Embed1 = new Discord.MessageEmbed()
        .setTitle(`Deleted role!`)
        .setColor(roleDelete.color)
        .setDescription(
          `${message.author.username} has deleted the role "${roleDelete.name}"\nIts ID: ${roleDelete.id}\nIts Hex Color Code: ${roleDelete.color}`
        );
      message.channel.send(Embed1);
    }

exports.help = {
  name: "deleterole",
  description: "deleting role on guilds!",
  usage: "deleterole <roleid>"
}

exports.conf = {
  aliases: ["drole"],
  cooldown: 5
}