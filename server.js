const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("Ping received");
  var owner = client.users.cache.get("583649910092595232")
  response.sendStatus(200);
  response.send("Owner This Project Is " + owner.tag + ", If You Want Asking Something Just DM Him!")
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();
const config = require("./config.json");

const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#00bfff",
        reaction: "🎉"
    }
});

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

let prefix = config.prefix;

client.on("ready", () => {
  function randomStatus() {
    let status = [
      `🌏 ${client.guilds.cache.size.toLocaleString()} Guild`,
      `👥 ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users`,
      `👋 Use ${prefix}help`
    ]; // You can change it whatever you want.
    let rstatus = Math.floor(Math.random() * status.length);

    // client.user.setActivity(status[rstatus], {type: "WATCHING"});
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.

    client.user.setActivity(status[rstatus], {
      type: "WATCHING"
    });
  }
  setInterval(randomStatus, 30000);
});

client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.token).catch(console.error); // This token will leads to the .env file. It's safe in ther
