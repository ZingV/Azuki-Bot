exports.run = async (client, message, args) => {
  
}

exports.help = {
         name: "play",
         description: "to play music",
         usage: "p <url/music name>",
         example: "/p lily",
};

exports.conf = {
          aliases: ["p"],
          cooldown: 5
};