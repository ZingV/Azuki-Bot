const Discord = require("discord.js");
const config = require("../../config.json")
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
  // check if the command caller has permission to use the command
  if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You dont have permission to use this command."
    );

  if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
    return message.channel.send(
      "<a:b_no:721969465205588048> | I don't have permission to add roles!"
    );

  //define the reason and mutee
  let mutee = message.mentions.members.first();
  if (!mutee)
    return message.channel.send(
      "<a:b_no:721969465205588048> | Please mention the user to be ~~silence~~!"
    );

  if (mutee.id === message.author.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't mute ur self"
    );
  if (mutee.id === client.user.id)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't mute me"
    );
  if (mutee.id === "583649910092595232")
    return message.channel.send(
      "<a:b_no:721969465205588048> | You can't mute my owner"
    );

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason given";

  //define mute role and if the mute role doesnt exist then create one
  let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#514f48",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SEND_TTS_MESSAGES: false,
          ATTACH_FILES: false,
          SPEAK: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  //add role to the mentioned user and also send the user a dm explaing where and why they were muted
  mutee.roles.add(muterole.id).then(() => {
    message.delete();
    mutee
      .send(
        `<a:b_yes:721969088813072425> | You have muted been in ${message.guild.name} for: ${reason}`
      )
      .catch(err => console.log(err.message));
    message.channel.send(
      `<a:b_yes:721969088813072425> | **${mutee.user.tag}** was successfully muted.`,
      {
        files: [
          {
            attachment: "https://media.tenor.com/images/d80cf35d6193cca6188bd80bc559c461/tenor.gif",
            name: "mute.gif"
          }
        ]
      }
    );
  });
};

exports.help = {
         name: "mute",
         description: "make silence ur members",
         usage: "mute <@mentions> <reason>",
         example: "/mute @McDunaldz Spam",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};