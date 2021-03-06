const weather = require('weather-js');

const Discord = require('discord.js');
const config = require("../../config.json")

exports.run = async (client, message, args) => {

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(!args[0]) return message.channel.send('<a:b_no:721969465205588048> | **Please specify a location**')

        if(result === undefined || result.length === 0) return message.channel.send('<a:b_no:721969465205588048> | **Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(config.color)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Windy', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)
        .setFooter(`${client.user.username}`)
        .setTimestamp();

        message.channel.send(weatherinfo)
        })        
    }

exports.help = {
         name: "weather",
         description: "to see weather on some location",
         usage: "weather <location>",
         example: "/weather jakarta",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};