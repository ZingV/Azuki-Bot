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
    
    if (message.author.id === ops.ownerID) return message.channel.send('<a:b_yes:721969088813072425> | You are 0% gay')
    if (message.author.id === ops.friendID) return message.channel.send('<a:b_yes:721969088813072425> | You are 0% gay')
    
    return message.channel.send('<a:b_yes:721969088813072425> | You are ' + Math.floor(Math.random() * 100 + 0) + '% gay')
    
  }
  
  if (args[0]) {
    
    const user = getUserFromMention(args[0])
    
    if (user.id === ops.ownerID) return message.channel.send(`<a:b_yes:721969088813072425> | **${user.tag}** is 0% gay`)
    if (user.id === ops.friendID) return message.channel.send(`<a:b_yes:721969088813072425> | **${user.tag}** is 0% gay`)
    
    if (user) return message.channel.send(`<a:b_yes:721969088813072425> | **${user.tag}** is ` + Math.floor(Math.random() * 100 + 0) + '% gay')
    
  }
    
}

exports.help = {
         name: "howgay",
         description: "to see how gay you are",
         usage: "howgay, howgay <@mentions>",
         example: "/howgay, /howgay McDunaldz",
};

exports.conf = {
          aliases: [""],
          cooldown: 5
};