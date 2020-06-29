const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("<a:b_no:721969465205588048> | **You don't have permission!**");
  var channel = client.channels.cache.get(message.channel.id);
  var copy = client.users.cache.get("583649910092595232");
  var hasil = channel.position;
  channel.clone().then(channel => {
    message.channel.delete();
    channel.setPosition(hasil);
    channel.send("<a:b_yes:721969088813072425> | **Channel has been Nuked!**", {
      files: [
        {
          attachment:
            "https://media.tenor.com/images/68a96e6ef5cb7b6f16f7147c8391f256/tenor.gif",
          name: "nuke.gif"
        }
      ]
    });
  });
};

exports.help = {
         name: "nuke",
         description: "purging all message on guilds",
         usage: "nuke",
         example: "/nuke",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};