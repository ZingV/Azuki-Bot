const Discord = require ("discord.js");

exports.run = async (client, message, args) => {
  if(message.author.id !== "583649910092595232") return
  
  let obj = [] 
                
        client.guilds.cache.map(async x => {
          //await x.fetchMembers() 
          obj.push({
            name: x.name,
            members: x.memberCount,
            ownerID: x.ownerID,
            id: x.id
          }) 
        }) 
       
        //await new Promise(resolve => setTimeout(resolve, 2500))
        
        let content = []
        
        let size = obj.length
        
        if (size > 10) size = 10
        
        obj = obj.sort((x, y) => y.members - x.members) 
        
        for (let i = 0;i < size;i++) {  
          content.push(`**${i + 1}# - ${obj[i].name}**:\nGuild ID: **${obj[i].id}**\nOwner ID: **${obj[i].ownerID}**\nMember Count: **${obj[i].members}** Users`) 
        }
  
  let embed = new Discord.MessageEmbed()
  .setColor("#00bfff")
  .setAuthor(`${client.user.username} Server List [${client.guilds.cache.size}]:`)
  .setDescription(content.join("\n\n"))
  .setTimestamp(new Date())
  .setImage("https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0031.gif")
  
  message.channel.send(embed)
}

exports.help = {
  name: "serverlist",
  description: "Server list",
  usage: "serverlist"
}

exports.conf = {
  aliases: [],
  cooldown: 0
}