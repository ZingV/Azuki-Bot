const translate = require('@k3rn31p4nic/google-translate-api');

exports.run = async(client, message, args) => {

    translate(args.slice(1).join(" "), { to: args[0] }).then(res => {
      message.channel.send(res.text);
  }).catch(err => {
      console.error(err);
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