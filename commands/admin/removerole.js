const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("<:redtick:719865119277842492> | You dont have permission to perform this command!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("<:redtick:719865119277842492> | Please mention the users.")
  
  if(rMember === message.author.id) return message.channel.send("<:redtick:719865119277842492> | You can't removerole from urself")
  if(rMember === client.user.id) return message.channel.send("<:redtick:719865119277842492> | You can't remove my role")
  
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("<:redtick:719865119277842492> | Please mention the roles.") 

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission.")

    if(!rMember.roles.has(role.id)) {
        return message.channel.send(`**${rMember.displayName}**, doesnt have the role!`)
    } else {
        await rMember.removeRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`<:greentick:719865049920831548> | You has been removed ${role} from **${rMember.displayName}**.`)
    }
}