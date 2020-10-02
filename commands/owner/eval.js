const config = require("../../config.json");
const db = require("quick.db")
const choice = ["🚫"]
const Discord = require("discord.js"),
  { post } = require("node-superfetch");

exports.run = async (client, message, args) => {
  // This command is super frickin' dangerous. Make it only visible and usable for you only, or give it to someone you trust.
  if (!client.config.owners.includes(message.author.id))
    return message.channel.send(
      "<a:b_no:721969465205588048> **| Only owner can use this command.**"
    );

  const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle("<a:b_yes:721969088813072425> Evaluates code")
    .addField("Input", "```js\n" + args.join(" ") + "```");

  try {
    const code = args.join(" ");
    if (!code)
      return message.channel.send(
        "<a:b_no:721969465205588048> | Please include the code."
      );
    message.delete();
    let evaled;

    // This method is to prevent someone that you trust, open the secret shit here.
    if (
      code.includes(`SECRET`) ||
      code.includes(`token`) ||
      code.includes("process.env")
    ) {
      evaled = "No, shut up, what will you do it with the token?";
    } else {
      evaled = eval(code);
    }

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled, { depth: 0 });

    let output = clean(evaled);
    if (output.length > 1024) {
      // If the output was more than 1024 characters, we're gonna export them into the hastebin.
      const { body } = await post("https://hastebin.com/documents").send(
        output
      );
      embed
        .addField("Output", `https://hastebin.com/${body.key}.js`)
        .setColor(config.color);
      // Sometimes, the body.key will turn into undefined. It might be the API is under maintenance or broken.
    } else {
      embed.addField("Output", "```js\n" + output + "```").setColor(config.color).setFooter(`${client.user.username} Bot V1`).setTimestamp();
    }

    const m = await message.channel.send(embed);
    for (const chot of choice) {
      await m.react(chot);
    }
    const filter = (rect, usr) => choice.includes(rect.emoji.name) && usr.id === message.author.id;
    m.createReactionCollector(filter, { time: 600000, max: 1 }).on("collect", async col => {
      if (col.emoji.name === "🚫") return m.delete();
    });
  } catch (error) {
    let err = clean(error);
    if (err.length > 1024) {
      // Do the same like above if the error output was more than 1024 characters.
      const { body } = await post("https://hastebin.com/documents").send(err);
      embed
        .addField("Output", `https://hastebin.com/${body.key}.js`)
        .setColor(config.color);
    } else {
      embed.addField("Output", "```js\n" + err + "```").setColor(config.color).setFooter(`${client.user.username} Bot V1`).setTimestamp();
    }

    const m = await message.channel.send(embed);
    for (const chot of choice) {
      await m.react(chot);
    }
    const filter = (rect, usr) => choice.includes(rect.emoji.name) && usr.id === message.author.id;
    m.createReactionCollector(filter, { time: 600000, max: 1 }).on("collect", async col => {
      if (col.emoji.name === "🚫") return m.delete();
    });
  }
};

exports.help = {
  name: "eval",
  description: "Evaluate some code.",
  usage: "eval <code>",
  example: "eval client.commands"
};

exports.conf = {
  aliases: ["ev"],
  cooldown: 0
};

function clean(string) {
  if (typeof text === "string") {
    return string
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return string;
  }
}
