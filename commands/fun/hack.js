const Discrod = require('discord.js')
const ms = require('ms')

exports.run = async (client, message, args) => {
if (!args[0]) return message.channel.send("<:redtick:719865119277842492> | Please mention the users!");
    const toHack = args.slice(0).join(" ") && args.shift().toLowerCase();
    message.delete();

    let msg = await message.channel.send(`Hacking ${toHack}...`);
    console.log(`[HACK] Hacking to ${toHack}`);

    let time = "3s";
    setTimeout(function() {
      msg.edit("Hacking Email...");
    }, ms(time));

    let time1 = "6s";
    setTimeout(function() {
      msg.edit(`Email: ${toHack}@gmail.com\n\`Pass: **********\nCode: 4S3D3_K0NT0L\``);
      console.log(`[HACK] Email: ${toHack}@gmail.com`);
    }, ms(time1));

    let time2 = "9s";
    setTimeout(function() {
      msg.edit(`Email of ${toHack} got hacked`);
      console.log(`[HACK] Pass: ${toHack}123`);
    }, ms(time2));

    let time3 = "12s";
    setTimeout(function() {
      msg.edit(`Hacking ${toHack}'s Device...`);
    }, ms(time3));

    let time4 = "15s";
    setTimeout(function() {
      msg.edit(`Collect all ${toHack}'s Data...`);
    }, ms(time4));

    let time5 = "18s";
    setTimeout(function() {
      msg.edit(`Finding ip ${toHack}'s`);
    }, ms(time5));

    let time6 = "20s";
    setTimeout(function() {
      msg.edit(`Ip of ${toHack}= 13.66.220.110`);
    }, ms(time6));

    let time7 = "24s";
    setTimeout(function() {
      msg.edit(`DDoSing ${toHack}'s Ip!`);
    }, ms(time7));

    let time8 = "28s";
    setTimeout(function() {
      msg.edit(`${toHack} IP Success DDoSed`);
    }, ms(time8));

    let time9 = "32s";
    setTimeout(function() {
      msg.edit(`Injecting Virus to ${toHack}'s All Device!`);
    }, ms(time9));

    let time10 = "38s";
    setTimeout(function() {
      msg.edit(`Virus Injected to ${toHack}'s Device`);
    }, ms(time10));

    let time11 = "42s";
    setTimeout(function() {
      msg.edit(`<:greentick:719865049920831548> | ${toHack} Succesfully hacked.`);
      console.log("[HACK] Hack was successful.");
    }, ms(time11))
      .then()
      .catch(err => msg.reply("Please mention the user!"));
  }