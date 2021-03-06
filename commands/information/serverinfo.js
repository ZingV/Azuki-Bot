const dateformat = require("dateformat")
const Discord = require("discord.js")
const config = require ("../../config.json");

exports.run = async (client, message, args) => {

    let icon = message.guild.iconURL({size: 2048})// Server Avatar
    
    let region = {
      "brazil": "π§π· Brazil",
      "eu-central": "πͺπΊ Central Europe",
      "singapore": "πΈπ¬ Singapore",
      "london": "π¦πΊ London",
      "russia": "π·πΊ Russia",
      "japan": "π―π΅ Japan",
      "hongkong": "π­π° Hongkong",
      "sydney": "π¬π§ Sydney",
      "us-central": "πΊπΈ U.S. Central",
      "us-east": "πΊπΈ U.S. East",
      "us-south": "πΊπΈ U.S. South",
      "us-west": "πΊπΈ U.S. West",
      "eu-west": "πͺπΊ Western Europe"
    }
    
    // Members
    let member = message.guild.members;
    let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
        online = member.cache.filter(m => m.user.presence.status === "online").size,
        idle = member.cache.filter(m => m.user.presence.status === "idle").size,
        dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
        robot = member.cache.filter(m => m.user.bot).size,
        total = message.guild.memberCount;
    
    // Channels
    let channels = message.guild.channels;
    let text = channels.cache.filter(r => r.type === "text").size,
        vc = channels.cache.filter(r => r.type === "voice").size,
        category = channels.cache.filter(r => r.type === "category").size,
        totalchan = channels.cache.size;
    
    // Region
    let location = region[message.guild.region];
    
    // Date
    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000) // 86400000, 5 digits-zero.
    let created = dateformat(message.guild.createdAt); // Install "dateformat" first.
    
    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTimestamp(new Date())
    .setThumbnail(icon)
    .setAuthor(message.guild.name, icon)
    .setDescription(`**ID:** ${message.guild.id}`)
    .addField("Region", `\`\`\`${location}\`\`\``)
    .addField("Date Created", `\`\`\`${created} \nsince ${h} day(s)\`\`\``)
    .addField("Boost Level", `\`\`\`${message.guild.premiumTier}\`\`\``)
    .addField("Owner", `\`\`\`${message.guild.owner.user.tag}\`\`\``)
    .addField(`Members [${total}]`, `\`\`\`Online: ${online} \nIdle: ${idle} \nDND: ${dnd} \nOffline: ${offline} \nBots: ${robot}\`\`\``)
    .addField(`Channels [${totalchan}]`, `\`\`\`Text: ${text} \nVoice: ${vc} \nCategory: ${category}\`\`\``)
    .setDescription(`**Roles [${message.guild.roles.cache.size}]**\n${message.guild.roles.cache.map(role => role.toString()).join(", ")}`);
    message.channel.send(embed);
}

exports.help = {
         name: "serverinfo",
         description: "checking info about guilds",
         usage: "serverinfo",
         example: "/serverinfo",
};

exports.conf = {
          aliases: [""],
          cooldown: 2
};