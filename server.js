let express = require("express"),
  http = require("http"),
  app = express();

app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendStatus(200); // Status: OK
});

let listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();
const config = require("./config.json");

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

let prefix = config.prefix;

client.on("ready", () => {
  function randomStatus() {
    let status = [`${client.users.cache.size} Users | ${prefix}help`]; // You can change it whatever you want.
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
client.login(process.env.token).catch(console.error); // This token will leads to the .env file. It's safe in there
