const Discord = require("discord.js");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  let prefix = client.config.prefix;

  const owner = client.users.cache.get("583649910092595232").tag

  if (!args[0]) {
    // This will turn the folder (category) into array.
    let module = client.helps.array();

    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id))
      module = client.helps.array().filter(x => !x.hide);
    const embed = new Discord.MessageEmbed()
      .setColor(config.color)
      .setTimestamp(new Date())
      .setFooter(
        `© 2020 Ordinary Bot • This Bot Under Development By ${owner}`
      )
      .setDescription(
        `\nTo check the command usage, type \`${prefix}help <commands>\`\n`
      )
      .setAuthor(
        client.user.username + " Commands list",
        client.user.displayAvatarURL()
      );

    for (const mod of module) {
      // You can change the .join(" | ") to commas, dots or every symbol.
      embed.addField(
        `${mod.name} (${mod.cmds.length})`,
        mod.cmds.map(x => `\`${x}\``).join(", ")
      );
    }

    return message.channel.send(embed);
  } else {
    let cmd = args[0];

    // If the user type the [command], also with the aliases.
    if (
      client.commands.has(cmd) ||
      client.commands.get(client.aliases.get(cmd))
    ) {
      let command =
        client.commands.get(cmd) ||
        client.commands.get(client.aliases.get(cmd));
      let name = command.help.name; // The command name.
      let desc = command.help.description; // The command description.
      let cooldown = command.conf.cooldown + " seconds"; // The command cooldown.
      let aliases = command.conf.aliases.join(", ")
        ? command.conf.aliases.join(", ")
        : "-";
      let usage = command.help.usage
        ? command.help.usage
        : "No usage provided.";
      let example = command.help.example
        ? command.help.example
        : "No example provided.";

      let embed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`Command: ${name}`)
        .addField("📝 **| Description**", desc)
        .setThumbnail(
          "https://cdn.discordapp.com/emojis/723186182304956477.png?v=1"
        )
        .setFooter(
          `Request by: ${message.author.tag} | ${client.user.username} V1.0.0`
        )
        .addField("⏱️ **| Cooldown**", cooldown)
        .addField("✂️ **| Aliases**", aliases, true)
        .addField("🔑 **| Usage**", usage, true)
        .addField(
          "📰 | Remind",
          `Hooks such as [] or <> are not to be used when using commands.`
        );

      return message.channel.send(embed);
    } else {
      // If the user type the wrong command.
      return message.channel.send({
        embed: { color: config.color, description: "Unknown command." }
      });
    }
  }
};

exports.help = {
  name: "help",
  description: "Show a command list.",
  usage: "help [command]",
  example: "/help ping"
};

exports.conf = {
  aliases: ["h", "?"],
  cooldown: 2
};
