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
       
        let lastPage = Math.ceil(Object.keys(obj).length / limit)
        let page = parseInt(args[0])
        if (!page) page = 1;
        if (page > lastPage) return message.channel.send(`There is no page **${page}**`)
  
  let frompages = limit * (page - 1);
  let pageslimit = 15 * page;
  
  let list = Object.entries(obj).sort((a, b) => b.members - a.members).slice(frompages, pageslimit);
  let content = []
  
  for (var i in list) {
    content.push(`**${i + 1}#** - **${obj[i].name}**:\n**Guild ID:** \`${obj[i].id}\``)
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