exports.run = async (client, message, args) => {
  let a = args.slice(0).join(" ");
  
  if (!a) return message.channel.send("Enter your text!");
  
  let reverse = a.split("").reverse().join("")
  
  let loadmsg = await message.channel.send("<a:loading:746163270414762184> Reversing ur text....").then(a => a.delete({ timeout: 1000}));
  
  message.channel.send("Here ur text: " + reverse);
}

exports.help = {
  name: "reverse",
  description: "Reversing text",
  usage: "reverse <text>"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}