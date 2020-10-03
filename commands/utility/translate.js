const translate = require('@k3rn31p4nic/google-translate-api');

exports.run = async(client, message, args) => {
  
  if (!args[0]) return message.channel.send("Insert Language!")
  
  if(!args.slice(1).join(" ")) return message.channel.send("Insert what text to translate!")

    translate(args.slice(1).join(" "), { to: args[0] }).then(res => {
      message.channel.send(`${res.text}`);
  }).catch(err => {
      message.channel.send(err);
  });
}

exports.help = {
  name: "translate",
  description: "Google Translate",
  usage: "translate <language> <text>"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}