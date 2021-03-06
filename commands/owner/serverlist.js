const Discord = require ("discord.js");

exports.run = async (client, message, args) => {
  if(message.author.id !== "583649910092595232") return
  
  let limit = 15;
  
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
       
        let content = []
        
        let size = obj.length
        
        if (size > 10) size = 10
        
        obj = obj.sort((x, y) => y.members - x.members) 
        
        for (let i = 0;i < size;i++) {  
          content.push(`**${i + 1}# - ${obj[i].name}**:\n**Guild ID**: \`${obj[i].id}\`\n**Owner ID**: \`${obj[i].ownerID}\`\n**Member Count**: \`${obj[i].members}\` Users`) 
        }
  
  let embed = new Discord.MessageEmbed()
  .setColor("#00bfff")
  .setAuthor(`${client.user.username} Server List:`)
  .setDescription(content.join("\n\n"))
  .setTimestamp(new Date())
  .setFooter("Top 10 Server On My Dashboard")
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