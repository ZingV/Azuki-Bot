const Discord = require("discord.js")
const config = require("../../config.json");
const superagent = require("superagent")

exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let dEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setAuthor(`DOGS!`, message.guild.iconURL())
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`Request by ${message.author.tag}`, client.user.displayAvatarURL())

        message.channel.send({embed: dEmbed})

        msg.delete();
}

exports.help = {
         name: "dog",
         description: "search pictures about dog",
         usage: "dog",
         example: "/dog",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};