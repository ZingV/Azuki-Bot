exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232")
    return message.channel.send("Only owner can use this command");

  if (args[0])
    return message.channel.send(
      "<:redtick:719865119277842492> | Please provide the command"
    );

  try {
    delete require.cache[require.resolve(`./${args[0]}`)];
  } catch (e) {
    return message.channel.send(
      `The command \`${args[0]}\` doesn't seem to exits`
    );
  }

  message.channel.send(`Successfully to reload \`${args[0]}\` command.`);
};

exports.help = {
  name: "reload",
  description: "for reload the command.",
  usage: "/reload <command>",
  example: "/reload ping"
};

exports.conf = {
  aliases: [""],
  cooldown: 0
};
