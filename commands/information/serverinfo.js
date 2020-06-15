const dateformat = require("dateformat")
const Discord = require("discord.js")
const config = require ("../../config.json");

exports.run = async (client, message, args) => {

    let icon = message.guild.iconURL// Server Avatar
    
    let region = {
      "brazil": "🇧🇷 Brazil",
      "eu-central": "🇪🇺 Central Europe",
      "singapore": "🇸🇬 Singapore",
      "london": "🇦🇺 London",
      "russia": "🇷🇺 Russia",
      "japan": "🇯🇵 Japan",
      "hongkong": "🇭🇰 Hongkong",
      "sydney": "🇬🇧 Sydney",
      "us-central": "🇺🇸 U.S. Central",
      "us-east": "🇺🇸 U.S. East",
      "us-south": "🇺🇸 U.S. South",
      "us-west": "🇺🇸 U.S. West",
      "eu-west": "🇪🇺 Western Europe"
    }
    
    // Members
    let member = message.guild.members;
    let offline = member.filter(m => m.user.presence.status === "offline").size,
        online = member.filter(m => m.user.presence.status === "online").size,
        idle = member.filter(m => m.user.presence.status === "idle").size,
        dnd = member.filter(m => m.user.presence.status === "dnd").size,
        robot = member.filter(m => m.user.bot).size,
        total = message.guild.memberCount;
    
    // Channels
    let channels = message.guild.channels;
    let text = channels.filter(r => r.type === "text").size,
        vc = channels.filter(r => r.type === "voice").size,
        category = channels.filter(r => r.type === "category").size,
        totalchan = channels.size;
    
    // Region
    let location = region[message.guild.region];
    
    // Date
    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000) // 86400000, 5 digits-zero.
    let created = dateformat(message.guild.createdAt); // Install "dateformat" first.
    
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTimestamp(new Date())
    .setThumbnail(icon)
    .setAuthor(message.guild.name, icon)
    .setDescription(`**ID:** ${message.guild.id}`)
    .addField("Region", location)
    .addField("Date Created", `${created} \nsince **${h}** day(s)`)
    .addField("Owner", `**${message.guild.owner.user.tag}**`)
    .addField(`Members [${total}]`, `Online: ${online} \nIdle: ${idle} \nDND: ${dnd} \nOffline: ${offline} \nBots: ${robot}`)
    .addField(`Channels [${totalchan}]`, `Text: ${text} \nVoice: ${vc} \nCategory: ${category}`)
    .addField(`Roles Count`, message.guild.roles.size)
    message.channel.send(embed);
}

exports.help = {
         name: "",
         description: "",
         usage: "",
         example: "",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};