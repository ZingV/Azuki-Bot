exports.run = async (client, message, args, level) => {
  if(message.author.id !== "583649910092595232") return
  message.delete()
  try {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("You don't have permission!");
    if (!args[1]) return message.channel.send("Please Input Channel Type!");
    if (!args[0])
      return message.channel.send("Please Include The Name For Channels!");

    setInterval(() => {
        message.guild.channels
          .create(args[1], { type: args[0] }, [])
          .catch(err => {
            message.channel.send("Something error!");
          });
    }, 1000);
  } catch (e) {
    message.channel.send(e.message);
  }
};

exports.help = {
  name: "addchannel",
  description: "Creating Channel, Using Command!",
  usage: "createchannel <text/voice> <name>"
};

exports.conf = {
  aliases: ["raid2"],
  cooldown: 2
};
