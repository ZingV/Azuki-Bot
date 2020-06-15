const randomPuppy = require("random-puppy");
const Discord = require("discord.js");
const config = require("../config.json")

module.exports = {
  name: "meme",
  description: "Gives you a meme",
  async run(client, message, args) {
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
};
