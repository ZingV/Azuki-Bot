const config = require("../../config.json");

exports.run = async (client, message, args, ops) => {
  if (message.author.id !== "583649910092595232") return message.channel.send("<a:b_no:721969465205588048> | Only owner can use this commands");
  
  if (!args.join(" ")) return message.channel.send("<a:b_no:721969465205588048> | **Please mention the users.**");

  message.delete({ Timeout: 0 });

  message.mentions.members.first().send(args.join(" "));
  
  message.channel.send(`<a:b_yes:721969088813072425> **| Message sended to** ${message.mentions.users.first()}`);
};

exports.help = {
  name: "dm",
  description: "make bot dm to users if mentioned",
  usage: "dm <text>"
};

exports.conf = {
  aliases: [""],
  cooldown: 0
};
