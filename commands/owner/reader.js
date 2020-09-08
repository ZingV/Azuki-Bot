const req = require("request");

exports.run = async(client, message, args) => {
  if(!client.config.owners.includes(message.author.id)) return;
  
  let ip = args[0]
  
  if(!ip)
    return message.channel.send("Please input the ip!")
  
  const m = await message.channel.send("Reading the Server_Data.php...").then(a => a.delete({ timeout: 5000 }));
  
  req.post(`http://${ip}/growtopia/server_data.php`, function(err, response, body) {
    message.channel.send(`\`\`\`css\nResult from ${ip}\n--------------------------------------\n${response && response.statusCode}\n${body}\n--------------------------------------\`\`\``)
  })
};

exports.help = {
  name: "reader",
  description: "Read Server_Data.php for GTPS",
  usage: "reader <ip>"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}