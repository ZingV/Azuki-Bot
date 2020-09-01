const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  let user = message.mentions.users.first();
  if(!user) {
    return message.channel.send("Sorry, you forgot to mention someone!");
  }
  let targetuser = await db.fetch(`money_${user.id}`); // fetch mentioned users balance
  let author = await db.fetch(`money_${message.author.id}`); // fetch authors balance

  if (author < 250) {
    // if the authors balance is less than 250, return this.
    return message.channel.send(
      "You need atleast 💴 250 Credits to rob somebody."
    );
  }

  if (targetuser < 0) {
    // if mentioned user has 0 or less, it will return this.
    return message.channel.send(
      `${user.user.username} does not have anything to rob.`
    );
  }

  let cooldown = 10000;
  let pad_zero = num => (num < 10 ? "0" : " ") + num;
  let lastGamble = await db.get(`lastGamble_${message.author.id}`);

  if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastGamble));
    let second = pad_zero(timeObj.seconds).padStart(2, "0");
    return message.channel.send(
      `Woooo it so fast. You need wait **${second}** sec before you can robbing again.`
    );
  }

  let random = Math.floor(Math.random() * 1000) + 1; // random number 200-1, you can change 200 to whatever you'd like

  message.channel.send(
    `${message.author} you robbed ${user} and got away with 💴 **${random}**!`
  );

  db.subtract(`money_${user.id}`, random);
  db.add(`money_${message.author.id}`, random);
};

exports.help = {
  name: "rob",
  description: "Robbing cash",
  usage: "rob <@user>"
};

exports.conf = {
  aliases: [],
  cooldown: 2
};
