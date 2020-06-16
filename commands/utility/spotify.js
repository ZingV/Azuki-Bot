const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  let convert = require("parse-ms");

  let status = user.presence.activities[0];

  if (
    user.presence.activities.length === 0 ||
    (status.name !== "Spotify" && status.type !== "LISTENING")
  )
    return message.channel.send(
      "<a:b_no:721969465205588048> | This user isn't listening the Spotify."
    );

  if (
    status !== null &&
    status.type === "LISTENING" &&
    status.name === "Spotify" &&
    status.assets !== null
  ) {
    let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
      url = `https://open.spotify.com/track/${status.syncID}`,
      name = status.details,
      artist = status.state,
      album = status.assets.largeText,
      timeStart = status.timestamps.start,
      timeEnd = status.timestamps.end,
      timeConvert = convert(timeEnd - timeStart);

    let minutes =
      timeConvert.minutes < 10
        ? `0${timeConvert.minutes}`
        : timeConvert.minutes;
    let seconds =
      timeConvert.seconds < 10
        ? `0${timeConvert.seconds}`
        : timeConvert.seconds;

    let time = `${minutes}:${seconds}`;

    const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Spotify Track Information",
        "https://cdn.discordapp.com/emojis/719125875395788880.png?v=1"
      )
      .setColor(0x1ed768)
      .setThumbnail(image)
      .addField("Name:", name, true)
      .addField("Album:", album, true)
      .addField("Artist:", artist, true)
      .addField("Duration:", time, false)
      .addField(
        "Listen now on Spotify!",
        `[${artist} - ${name}](${url})`,
        false
      );
    message.channel.send(embed);
  }
};

exports.help = {
  name: "spotify",
  description: "check someone when listening to spotify",
  usage: "spotify, spotify <@mentions>",
  example: "/spotify, /spotify @McDunaldz"
};

exports.conf = {
  aliases: ["sp"],
  cooldown: 5
};
