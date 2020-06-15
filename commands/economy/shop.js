const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setColor("RED")
    .addField("<:rods:721718010070434136> | Fishing Rod", "id: rod\ncost: 1,000 coins")
    .addField("Sword", "id: sword\ncost: 700 coins")
    .addField("Pickaxe", "id: pick\ncost: 1,200 coins")
    .addField("Gun", "id: gun\ncost: 10,000 coins")
    .addField("Tea", "id: tea\ncost: 5 coins");
  message.channel.send(embed);
};

exports.help = {
  name: "shop",
  description: "place for buying items",
  usage: "/shop",
  example: "/shop"
};

exports.conf = {
  aliases: ["store"],
  cooldown: 0
};
