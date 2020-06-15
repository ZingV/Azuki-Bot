const Discord = require('discord.js')
const config = require("../../config.json")

exports.run = async (client, message, argan) => {
  
  try { 
    const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...) 
    
    const embed = new Discord.RichEmbed() 
    .setColor(config.color) // Tired of choosing the embed colors? Just type "RANDOM" on it! 
    .addField("⌛ Latency", `**${m.createdTimestamp - message.createdTimestamp}ms**`) 
    .addField("💓 API", `**${Math.floor(client.ping)}ms**`)// Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0 
    .setTimestamp()
    
    return m.edit(`🏓 Pong!`, embed); 
  }
  
  catch (error) { return message.channel.send(`Something went wrong: ${error.message}`); // Restart the bot as usual. } }

   }
  
}
exports.help = {
  name: "ping",
  description: "Ponged!",
  usage: "/ping",
  example: "/ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
