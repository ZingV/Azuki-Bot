const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author
        let money = db.fetch(`money_${user.id}`)

        if (money === null) money = 0

        message.channel.send(`${user} you have ${money} coins`)
}

exports.help = {
  name: "bal",
  description: "balance ur money",
  usage: "/bal <mention>",
  example: "/bal @mention someone"
};

exports.conf = {
  aliases: ["bal"],
  cooldown: 0
};