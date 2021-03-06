const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let guildsEval = await client.guilds.cache.size;
  let channelsEval = await client.channels.cache.size;
  let usersEval = await client.users.cache.size;
  const discord = require("discord.js").version;
  const Node = process.version;
  const config = require("../../config.json");
  const credit = client.users.cache.get("694411710974525551");
  const credit2 = client.users.cache.get("580618094792146975");
  const owner = client.users.cache.get("583649910092595232");
  function parseDur(ms) {
    let seconds = ms / 1000,
      days = parseInt(seconds / 86400);
    seconds = seconds % 86400;

    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;

    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);

    if (days) {
      return `${days}d ${hours}h ${minutes}m`;
    } else if (hours) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes) {
      return `${minutes}m ${seconds}s`;
    }

    return `${seconds}s`;
  } // Uptime bot.

  var embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(
      client.user.username + " Statistics",
      client.user.displayAvatarURL
    )
    .setDescription(
      `\`Use ${
        config.prefix
      }help to see all commands list!\`\n**Owner**\n\`\`\`• ${
        owner.tag
      }\`\`\`\n**Credits**\n**\`\`\`• Thanks to ${
        credit.username
      }\n• Thanks to ${
        credit2.username
      }\`\`\`**\n**Server Information**\n\`\`\`\n• Operating System: Enterprise Linux 5
• Kernel: 4.16.0-34-Enterprise
• Processor: Intel(R) Xeon(R) CPU E5-2673 v3 @ 2,40 GHz
• Architecture: x64_x64\n• Node.js: ${Node}\n• Discord.js: ${discord}\n• Websocket: ${client.ws.ping.toFixed(
        2
      )}ms\`\`\`\n**General information**,\n\`\`\`• Guilds: ${guildsEval.toLocaleString()}\n• Channels: ${channelsEval.toLocaleString()}\n• Users: ${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\n• Uptime: ${parseDur(
        client.uptime
      )}\`\`\`\n**Usage Information**\n\`\`\`• Memory usage:\n${(
        process.memoryUsage().rss /
        1024 /
        1024
      ).toFixed(2)} MB RSS\n${(
        process.memoryUsage().heapUsed /
        1024 /
        1024
      ).toFixed(2)} MB Heap\n\n• CPU usage:\nNode: ${(
        process.cpuUsage().user /
        1024 /
        1024
      ).toFixed(2)}%\nSystem: ${(
        process.cpuUsage().system /
        1024 /
        1024
      ).toFixed(2)}%\`\`\``
    )
    .setColor(config.color)
    .setFooter(
      `Request by: ${message.author.tag} | ${client.user.username} v1.0.0`
    )
    .setTimestamp();
  return message.channel.send(embed);
};

exports.help = {
  name: "stats",
  description: "to see status about bot",
  usage: "stats",
  example: "/stats"
};

exports.conf = {
  aliases: ["info", "botstats", "botinfo"],
  cooldown: 2
};
