const Discord = require("discord.js"),
  cooldowns = new Discord.Collection();
const db = require("quick.db")
const config = require("../config.json");
// cooldowns will store the user when they are still in the cooldown mode.

module.exports = async (client, message) => {
  // Prevent any chit-chats with other bots, or by himself.
  if (message.author.bot || message.author === client.user) return;

  let pref = db.get(`prefix_${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = config.prefix; // If the server doesn't have any custom prefix, return default.
  } else {
    prefix = pref;
  }
  
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.channel.send(`👋 ${message.author} My Current Prefix Is \`${prefix}\``);
  }
  
  let inviteLink = [];

  if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
    await message.delete();
    return message.channel
      .send("Bro, you can't promote your server here!")
      .then(m => m.delete({ timeout: 10000 })); // Add this if you want the message automatically deleted.
  }

  // If the user doesn't doing any to the bot, return it.
  if (!message.content.startsWith(prefix)) return;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  let sender = message.author;

  // Many people don't know what is message.flags.
  // We've already seen a bot who has a message.flags or they would called, parameter things.
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1)); // Example: /play -soundcloud UP pice
  }

  let commandFile =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!commandFile) return; // If the commands doesn't exist, ignore it. Don't send any warning on this.

  // This will set a cooldown to a user after typing a command.
  if (!cooldowns.has(commandFile.help.name))
    cooldowns.set(commandFile.help.name, new Discord.Collection());

  const member = message.member,
    now = Date.now(),
    timestamps = cooldowns.get(commandFile.help.name),
    cooldownAmount = (commandFile.conf.cooldown || 3) * 3000;

  if (!timestamps.has(member.id)) {
    if (!client.config.owners.includes(message.author.id)) {
      // If the user wasn't you or other owners that stored in config.json
      timestamps.set(member.id, now);
    }
  } else {
    const expirationTime = timestamps.get(member.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 3000;
      return message.channel
        .send(
          `<a:b_no:721969465205588048> **| ⏱️ Reach limit spam**, please wait **${timeLeft.toFixed(
            1
          )}** seconds to try the command again.`
        )
        .then(d => d.delete({ timeout: 2000 }));
    }

    timestamps.set(member.id, now);
    setTimeout(() => timestamps.delete(member.id), cooldownAmount); // This will delete the cooldown from the user by itself.
  }

  let ops = {
    ownerID: "583649910092595232",
    friendID: "354046774350184449"
  };

  try {
    if (!commandFile) return;
    commandFile.run(client, message, args, ops);
  } catch (error) {
    console.log(error.message);
  } finally {
    let embed = new Discord.MessageEmbed()
      .setTitle(`Command Usage Logs`)
      .setColor(config.color)
      .addField(
        `Executor Command Place:`,
        `Guild Name: **${message.guild.name}**\nGuild Owner: **${message.guild.owner.user.tag}**\nGuild ID: **${message.guild.id}**\nIn Channel: <#${message.channel.id}>\nChannel ID: **${message.channel.id}**`
      )
      .addField(`Executor Command:`, `\`\`\`${sender.tag}\`\`\``)
      .addField(`Executor ID:`, `\`\`\`${sender.id}\`\`\``)
      .addField(`Executing Command:`, `\`\`\`${cmd}\`\`\``)
      .setTimestamp(new Date());
    client.channels.cache.get("730392825941721139").send(embed);
  }
};
