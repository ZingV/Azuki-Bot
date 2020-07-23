const Discord = require("discord.js")
const cheerio = require("cheerio")
const request = require("request-promise")

exports.run = async (client, message, args) => {
  if(!args[0])
    return message.channel.send("Please enter yt url")
  let yturl = args[0]
  let response = await request(yturl)
  let cok = cheerio.load(response)
  let subscount = cok('').attr('title');
}

exports.help = {
  name: "subs",
  description: "Viewing Ur Subs Count",
  usage: "subs"
  }

exports.conf = {
  aliases: [],
  cooldown: 2
  }