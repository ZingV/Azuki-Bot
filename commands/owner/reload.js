exports.run = async (client, message, args) => {
  if (message.author.id != "583649910092595232")
    return message.channel.send("You're the bot the owner!");

  if (!args[0])
    return message.channel.send("Please provide a command to reload!");

  let commandName = args[0].toLowerCase();

  try {
    delete require.cache[require.resolve(`./${commandName}.js`)]; // usage !reload <name> bot.commands.delete(commandName)
    const pull = require(`./${commandName}.js`);
    client.commands.set(commandName, pull);
  } catch (e) {
    return message.channel.send(e.message);
  }
  message.channel.send(
    `The  command \`${args[0].toUpperCase()}\` has been reloaded!`
  );
};
exports.help = {
  name: "reload",
  description: "reload commands.",
  usage: "reload <command name>",
  example: ""
};

exports.conf = {
  aliases: ["rl"],
  cooldown: 0
};
