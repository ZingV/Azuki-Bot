const db = require("quick.db");
const Discord = require("discord.js");
const ms = require("ms");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
  if (message.author.id !== "583649910092595232")
    return message.channel.send(
      "<:redtick:719865119277842492> | Only owner bot can use this command."
    );

  let m = await message.channel
    .send("**Rebooting...**")
  
  m.edit("Reboot successfully")

    .then(message => process.exit())
    .then(() => client.login(process.env.BOT_TOKEN))
};

exports.conf = {
  aliases: ["shutdown", "rb"],
  cooldown: ""
};

exports.help = {
  name: "reboot",
  description: "This will reboot the bot instance.",
  usage: "reboot"
};
