const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fetch = require("node-fetch");
const config = require("../config.json");

module.exports = {
  name: "covid",
  description: "covid statistics",

  async run(client, message, args) {
    if (!args[0])
      return message.channel.send("<:redtick:719865119277842492> | Please enter country you want to see stats!");

    if (args.join(" ") === "all") {
      let all = args[0];
      fetch(`https://corona.lmao.ninja/v2/all`)
        .then(res => res.text())
        .then(json => {
          var info = JSON.parse(json);
          var embed = new Discord.RichEmbed()
            .setColor(config.color)
            .setAuthor("Global")
            .setThumbnail(
              "https://cdn.discordapp.com/avatars/583649910092595232/93ab252b08f0a5de0bc3661bbb150afd.png?size=2048"
            )
            .addField("Population", info.population.toLocaleString())
            .addField("Total Cases", info.cases.toLocaleString())
            .addField("Total Active", info.active.toLocaleString())
            .addField("Total Recovered", info.recovered.toLocaleString())
            .addField("Today Infected", info.todayCases.toLocaleString())
            .addField("Today Death", info.todayDeaths.toLocaleString())
            .addField("Total Deaths", info.deaths.toLocaleString())
            .addField("Total Critical", info.critical.toLocaleString())
            .setFooter(`#STAYATHOME`)
            .setTimestamp();
          message.channel.send(embed);
        });
    } else {
      let country = args[0];
      fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
        .then(res => res.text())
        .then(json => {
          var info = JSON.parse(json);
          var embed = new Discord.RichEmbed()
            .setColor(config.color)
            .setAuthor(info.country)
            .setThumbnail(info.countryInfo.flag)
            .addField("Population", info.population.toLocaleString())
            .addField("Total Cases", info.cases.toLocaleString())
            .addField("Total Active", info.active.toLocaleString())
            .addField("Total Recovered", info.recovered.toLocaleString())
            .addField("Today Cases", info.todayCases.toLocaleString())
            .addField("Today Deaths", info.todayDeaths.toLocaleString())
            .addField("Total Deaths", info.deaths.toLocaleString())
            .addField("Total Critical", info.critical.toLocaleString())
            .setDescription("**Affected Country**\n215")
            .setFooter(
              `Want see global cases? type ${config.prefix}covid all | #STAYATHOME`
            )
            .setTimestamp();

          message.channel.send(embed)
        
         })
        .then()
        .catch(err => message.channel.send("<:redtick:719865119277842492> | Please enter the **Valid Country!**"));
    }
  }
};

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