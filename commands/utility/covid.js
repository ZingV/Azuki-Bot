const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("../../config.json");
exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      "<:redtick:719865119277842492> | Please enter country you want to see stats!"
    );

  if (args.join(" ") === "all") {
    let all = args[0];
    fetch(`https://corona.lmao.ninja/v2/all`)
      .then(res => res.text())
      .then(json => {
        var info = JSON.parse(json);
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setAuthor("Global")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/717166064282370061/722394846928699442/IMG-20200616-WA0019.png"
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
        var embed = new Discord.MessageEmbed()
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

        message.channel.send(embed);
      })
      .then()
      .catch(err =>
        message.channel.send(
          "<a:b_no:721969465205588048> | Please enter the **Valid Country!**"
        )
      );
  }
};

exports.help = {
  name: "covid",
  description: "see covid stats in other country",
  usage: "/covid all, /covid <country>",
  example: "/covid all, /covid id"
};

exports.conf = {
  aliases: [""],
  cooldown: 5
};
