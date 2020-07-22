const {MessageAttachment, Client, MessageEmbed} = require("discord.js");
const {createCanvas, loadImage } = require("canvas")
const db = require("quick.db")

exports.run = async (client, message, args) => {
    const mention = message.mentions.users.first();
  let lvl = db.fetch(`level_
    if(!mention){
        const data = await lvl[message.guild.id][message.author.id]
        if(!data) return message.channel.send("The User Is Not Have A Rank!")

        const canvas = createCanvas(1000, 333);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, ".", "Image", "background.jpg"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "#000000";
        ctx.fillRect(350, 150, 600, 65);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeRect(350, 150, 600, 65);
        ctx.stroke();

        ctx.fillStyle = "#00FFFF";
        ctx.globalAlpha = 0.6;
        ctx.fillRect(350, 150, ((100 / (data.level * 500) * 5) * data.xp), 65);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.font = "35px Arial"
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${data.xp} / ${data.level * 500} XP`, 850, 140);

        ctx.textAlign = "left";
        ctx.fillText(message.author.tag + " Rank", 15, 316.5);

        ctx.font = "50px Arial"
        ctx.fillText("Level: ", 350, 130);
        ctx.fillText(`${data.level}`, 500, 130)

        ctx.arc(170, 160, 120, 0, Math.PI * 2, true)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.closePath();
        ctx.clip();

        const avatar = await loadImage(message.author.displayAvatarURL({ format: "jpg" }));
        ctx.drawImage(avatar, 40, 40, 250, 250);

        const Attachment = new MessageAttachment(canvas.toBuffer(), `${message.author.username}-rank.jpg`)
        message.channel.send(`${message.author.tag} Rank`, Attachment)
    } else {
        const data = await lvl[message.guild.id][mention.id]
        if(!data) return message.channel.send("The User Is Not Have A Rank!")

        const canvas = createCanvas(1000, 333);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, ".", "Image", "background.jpg"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "#000000";
        ctx.fillRect(350, 150, 600, 65);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeRect(350, 150, 600, 65);
        ctx.stroke();

        ctx.fillStyle = "#00FFFF";
        ctx.globalAlpha = 0.6;
        ctx.fillRect(350, 150, ((100 / (data.level * 500) * 5) * data.xp), 65);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.font = "35px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${data.xp} / ${data.level * 500} XP`, 850, 140);

        ctx.textAlign = "left";
        ctx.fillText(mention.tag + " Rank", 15, 316.5);

        ctx.font = "50px Arial";
        ctx.fillText("Level: ", 350, 130);
        ctx.fillText(`${data.level}`, 500, 130)

        ctx.font = "50px Arial";
        ctx.fillText("Rank: ", 100, 50);
        ctx.fillText()
        cvc.write()

        ctx.arc(170, 160, 120, 0, Math.PI * 2, true)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.closePath();
        ctx.clip();

        const avatar = await loadImage(mention.displayAvatarURL({ format: "jpg" }));
        ctx.drawImage(avatar, 40, 40, 250, 250);

        const Attachment = new MessageAttachment(canvas.toBuffer(), `${mention.username}-rank.jpg`)
        message.channel.send(`${mention.tag} Rank`, Attachment)
    }
}


exports.help = {
  name: "rank",
  description: "View Ranking",
  usage: "rank <@user>"
}

exports.conf = {
  aliases: [],
  cooldown: 2
}