exports.run = async (client, message, args) => {
try {
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("You don't have permission!");
  if (args[1]) return message.channel.send("Please Input Channel Type!");
  if (args[0])
    return message.channel.send("Please Include The Name For Channels!");

  message.channel.send("Channel has been created").then(() => {
    message.guild.channels
      .create(args[1], { type: args[0] }, [])
      .then()
      .catch(err => message.channel.send("Something error!"));
  });
} catch(e) {
  message.channel.send(e.message)
}
};

exports.help = {
  name: "createchannel",
  description: "Creating Channel, Using Command!",
  usage: "createchannel <text/voice> <name>"
};

exports.conf = {
  aliases: [""],
  cooldown: 2
};
