const ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "<a:b_no:721969465205588048> | You don't have permession to execute the command."
    );
  if (!client.lockit) client.lockit = [];
  let time = args.join(" ");
  let validUnlocks = ["release", "unlock"];
  if (!time)
    return message.channel.send(
      "<a:b_no:721969465205588048> | You must set a duration for the lockdown in either hours, minutes or seconds."
    );

  if (validUnlocks.includes(time)) {
    message.channel
      .createOverwrite(message.guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.send(
          "<a:b_yes:721969088813072425> **| Channels Unlocked down**"
        );
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    message.channel
      .createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel
          .send(
            `<a:b_yes:721969088813072425> **| Channel locked down for ${ms(
              ms(time),
              { long: true }
            )}**`
          )
          .then(() => {
            client.lockit[message.channel.id] = setTimeout(() => {
              message.channel
                .createOverwrite(message.guild.id, {
                  SEND_MESSAGE: null
                })
                .then(
                  message.channel.send(
                    "<a:b_yes:721969088813072425> **| Channel Unlocked down**"
                  )
                )
                .catch(console.error);
              delete client.lockit[message.channel.id];
            }, ms(time));
          })
          .catch(error => {
            console.log(error);
          });
      });
  }
};

exports.help = {
         name: "lockdown",
         description: "lock chat channels with time elapsed",
         usage: "/lockdown <time>",
         example: "/lockdown 10s",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};