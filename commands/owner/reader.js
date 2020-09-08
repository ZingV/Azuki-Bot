const req = require("request");

exports.run = async(client, message, args) => {
  if(!client.config.owners.includes(message.author.id)) return;
  
  let ip = args[0]
  
  if(!ip)
    return message.channel.send("Please input the ip!")
  
  req.post(`httpmessage.channel.send(`Result from ${ip}`)
://${ip}/growtopia/server_data.php`, function(err, response, body) {
    
  })
}