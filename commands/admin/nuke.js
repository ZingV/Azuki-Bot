const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("<:redtick:719865119277842492> | **You don't have permission!**");
  var channel = client.channels.get(message.channel.id);
  var copy = client.users.get("622019385086836765");
  var hasil = channel.position;
  channel.clone().then(channel => {
    message.channel.delete();
    channel.setPosition(hasil);
    channel.send("<:greentick:719865049920831548> | **Channel has been Nuked!**", {
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
