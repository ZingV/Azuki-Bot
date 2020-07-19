const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")

exports.run = async (client, message, args) => {
  const amount = parseInt(args[0]);
  const result = Math.floor(Math.random() * 10);
  const bal = db.get(`money_${message.author.id}`);
  
  if(!amount)
    return message.channel.send("Please insert an amount");
  
  if(isNaN(amount))
    return message.channel.send("That was not a number");
  
  if(amount > bal || !bal || bal === 0) return message.channel.send("You don't have enough credits");
  
  if(amount < 200) return message.channel.send("You don't have enough money for the gambling, The minimum was 💴 200 Credits");
  
  let cooldown = 10000;
  let pad_zero = num => (num < 10 ? '0' : ' ') + num;
  let lastGamble = await db.get(`lastGamble_${message.author.id}`);
  
  if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastGamble));
    let second = pad_zero(timeObj.seconds).padStart(2, "0");
    return message.channel.send(`Woooo it so fast. You need wait **${second}** sec before you can gambling again.`)
  }
  
  if(result < 5) {
    await db.set(`lastGamble_${message.author.id}`, Date.now());
    await db.subtract(`money_${message.author.id}`, amount)
    return message.channel.send(`Ahh, no. You lose 💴 **${amount}**. Good Luck Next Time!`);
  } else if (result > 5) {
    await db.set(`lastGamble_${message.author.id}`, Date.now());
    await db.add(`money_${message.author.id}`, amount);
    return message.channel.send(`Woohoo, You Won 💴 **${amount}** Good Luck, Have Fun!`)
  }
  
  
}

exports.help = {
  name: "gamble",
  description: "Gambling",
  usage: "gamble <amount>"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}