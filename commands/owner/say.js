const config = require("../../config.json");

exports.run = async (client, message, args, ops) => {
  if (message.author.id === config.owners) return message.channel.send("<a:b_no:721969465205588048> | Only owner can use this commands");
  
  if (!args.join(" ")) return message.channel.send("**Nothing to say?**");

  message.delete({ Timeout: 0 });

  message.channel.send(args.join(" "));
};

exports.help = {
  name: "say",
  description: "make bot saying ur text",
  usage: "say <text>"
};

exports.conf = {
  aliases: [""],
  cooldown: 0
};
