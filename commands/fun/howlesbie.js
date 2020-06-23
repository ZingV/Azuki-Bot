exports.run = (client, message, args, ops) => {
  
  function getUserFromMention(mention) {
    
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
    
  }
        
}
  if (!args[0]) {
    
    if (message.author.id === ops.ownerID) return message.channel.send('<a:b_yes:721969088813072425> | You are 0% lesbie')
    if (message.author.id === ops.friendID) return message.channel.send('<a:b_yes:721969088813072425> | You are 0% lesbie')
  
    return message.channel.send('<a:b_yes:721969088813072425> | You are ' + Math.floor(Math.random() * 100 + 0) + '% lesbie')
    
  }
  
  if (args[0]) {
    
    const user = getUserFromMention(args[0])
    
    if (user.id === ops.ownerID) return message.channel.send(`<a:b_yes:721969088813072425> | **${user.tag}** is 0% lesbie`)
    if (user.id === ops.friendID) return message.channel.send(`<a:b_yes:721969088813072425> | **${user.tag}** is 0% lesbie`)
    
    if (user) return message.channel.send(`<a:b_yes:721969088813072425> | **${user.tag}** is ` + Math.floor(Math.random() * 100 + 0) + '% lesbie')
    
  }
    
}

exports.help = {
         name: "howlesbi",
         description: "to check lesbie you are",
         usage: "howlesbi, howlesbi <@mentions>",
         example: "/howlesbi, /howlesbi @McDunaldz",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};