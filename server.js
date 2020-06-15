const https = require("https");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("ping");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 28000);

const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.on("ready", () => {
  function randomStatus() {
    let status = [`${client.users.cache.size} Users | /help`]; // You can change it whatever you want.
    let rstatus = Math.floor(Math.random() * status.length);

    // client.user.setActivity(status[rstatus], {type: "WATCHING"});
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    // Example: streaming

    client.user.setActivity(status[rstatus], {
      type: "WATCHING"
    });
  }
  setInterval(randomStatus, 30000);
});
client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.token).catch(console.error); // This token will leads to the .env file. It's safe in there.
