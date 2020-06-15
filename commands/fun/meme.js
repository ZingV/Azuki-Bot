const randomPuppy = require("random-puppy");
const Discord = require("discord.js");
const config = require("../config.json")

exports.run = async (client, message, args) => {
    const name = await client.user.username
    const subReddits = ["dankmemes", "meme", "memes"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const memeEmbed = new Discord.RichEmbed()
      .setColor(config.color)
      .setImage(img)
      .setTitle(`Your meme. From ${name}`)
      .setURL(`https://reddit.com/r/${random}`);
    message.channel.send(memeEmbed);
  }

exports.help = {
         name: "",
         description: "",
         usage: "",
         example: "",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};
