const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setColor("#00bfff")
    .addField(
      "<:rods:721718010070434136> | Fishing Rod",
      "id: rod\ncost: 💴 1,000 Credits"
    )
    .addField(
      "<:swords:721721896059797525> | Sword",
      "id: sword\ncost: 💴 700 Credits"
    )
    .addField(
      "<:pick:721715584752156753> | Pickaxe",
      "id: pick\ncost: 💴 1,200 Credits"
    )
    .addField("<:guns:721722603219189801> | Gun", "id: gun\ncost: 💴 10,000 Credits")
    .addField("<:tea:721723802211450910> | Tea", "id: tea\ncost: 💴 5 Credits");
  message.channel.send(embed);
};

exports.help = {
  name: "shop",
  description: "place for buying items",
  usage: "shop",
  example: "/shop"
};

exports.conf = {
  aliases: ["store"],
  cooldown: 0
};
