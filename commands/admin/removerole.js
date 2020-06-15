const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("<a:b_no:721969465205588048> | You dont have permission to perform this command!")

    let rMember = message.mentions.members.first()
    if(!rMember) return message.channel.send("<a:b_no:721969465205588048> | Please mention the users.")
  
  if(rMember === message.author.id) return message.channel.send("<a:b_no:721969465205588048> | You can't removerole from urself")
  if(rMember === client.user.id) return message.channel.send("<a:b_no:721969465205588048> | You can't remove my role")
  
    let role = message.guild.roles.find || message.mentions.roles.first()
    if(!role) return message.channel.send("<a:b_no:721969465205588048> | Please mention the roles.") 

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission.")

    if(!rMember.roles.cache.has(role.id)) {
        return message.channel.send(`<a:b_no:721969465205588048> | **${rMember.displayName}**, doesnt have the role!`)
    } else {
        await rMember.roles.remove(role.id).catch(e => console.log(e.message))
        message.channel.send(`<a:b_yes:721969088813072425> | You has been removed ${role} from **${rMember.displayName}**.`)
    }
}

exports.help = {
         name: "removerole",
         description: "remove roles from members",
         usage: "/demote <@mentions> <@roles>",
         example: "/demote @McDunaldz @Youtuber",
};

exports.conf = {
          aliases: ["demote"],
          cooldown: 5
};