const ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("You are not allowed to start giveaways");

  let channel = message.mentions.channels.first();

  if (!channel) return message.channel.send("Please provide a channel");

  let giveawayDuration = args[1];

  if (!giveawayDuration || isNaN(ms(giveawayDuration)))
    return message.channel.send("Pleae provide a valid duration");

  let giveawayWinners = args[2];

  if (isNaN(giveawayWinners) || parseInt(giveawayWinners) <= 0)
    return message.channel.send("Please provide a valid number of winners!");

  let giveawayPrize = args.slice(3).join(" ");

  if (!giveawayPrize)
    return message.channel.send("Ok then, I'll give away nothing");

  client.giveawaysManager.start(channel, {
    time: ms(giveawayDuration),
    prize: giveawayPrize,
    winnerCount: giveawayWinners,
    hostedBy: client.config.hostedBy ? message.author : null,

    messages: {
      giveaway: "🎉 **GIVEAWAY STARTED** 🎉",
      giveawayEnded:"🎉 **GIVEAWAY ENDED** 🎉",
      timeRemaining: "Time remaining: **{duration}**",
      inviteToParticipate: "React with 🎉 to enter",
      winMessage: "Congratulations {winners}! You won **{prize}**!",
      embedFooter: "Giveaway time!",
      noWinner: "Couldn't determine a winner",
      hostedBy: "Hosted by: {user}",
      winners: "winners",
      endedAt: "Ends at",
      units: {
        seconds: "seconds",
        minutes: "minutes",
        hours: "hours",
        days: "days",
        pluralS: false
      }
    }
  });

  message.channel.send(`Giveaway starting in ${channel}`);
};

exports.help = {
  name: "giveaway",
  description: "Starting Giveaway",
  usage: "giveaway <channel> <duration> <winners> <prize>"
};

exports.conf = {
  aliases: [],
  cooldown: 5
};
