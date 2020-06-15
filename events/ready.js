const config = require("../config.json");

module.exports = client => {
  console.log(`${client.user.tag} The bot is ready!`);
  
  let prefix = config.prefix;
  
  client.on("message", async message => {
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.reply(`My prefix is \`${prefix}\``);
    }
  });
};
