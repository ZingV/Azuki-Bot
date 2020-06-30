exports.run = async (client, message,args) => {
  if(!message.members.hasPermissions("MANAGE_CHANNELS")) return message.chsnnel.send("You don't have permission!")
  if(args[1]) return message.channel.send("Please Input Channel Type
  
}

exports.help = {
  name: "createchannel",
  description: "Creating Channel, Using Command!",
  usage: "createchannel <text/voice> <name>"
}

exports.conf = {
  aliases: [""],
  cooldown: 2
}