const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("<:redtick:719865119277842492> | You dont have permission to perform this command!")

    let rMember = message.mentions.members.first()
    if(!rMember) return message.channel.send("<a:b_no:721969465205588048> | Please mention the users.")
  
  if(rMember === message.author.id) return message.channel.send("<a:b_no:721969465205588048> | You can't addrole to urself")
  if(rMember === client.user.id) return message.channel.send("<a:b_no:721969465205588048> | You can't addrole to me")
  
    let role = message.guild.roles.find || message.mentions.roles.first()
    if(!role) return message.channel.send("<a:b_no:721969465205588048> | Please mention the roles.") 
    
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission.")

    if(rMember.roles.cache.has(role.id)) {
        return message.channel.send(`<a:b_no:721969465205588048> | **${rMember.displayName}**, already has the role!`)
    } else {
        await rMember.roles.add(role.id).catch(e => console.log(e.message))
        message.channel.send(`<a:b_yes:721969088813072425> | You has been added **${role}** to **${rMember.displayName}.**`)
    }
};

exports.help = {
         name: "addrole",
         description: "addrole to members",
         usage: "/addrole <@mentions> <@role>",
         example: "/addrole @McDunaldz @Member",
};

exports.conf = {
          aliases: ["promote"],
          cooldown: 5
};