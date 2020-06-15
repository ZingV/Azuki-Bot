const Discord = require("discord.js")
const config = require("../config.json");
const superagent = require("superagent")

exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let dEmbed = new Discord.RichEmbed()
        .setColor(config.color)
        .setAuthor(`TestBot DOGS!`, message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`TEST BOT`, client.user.displayAvatarURL)

        message.channel.send({embed: dEmbed})

        msg.delete();
}

exports.help = {
         name: "",
         description: "",
         usage: "",
         example: "",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};