exports.run = async (client, message, args) => {
  
}

exports.help = {
         name: "nowplaying",
         description: "checking what now playing on music queue",
         usage: "np",
         example: "/np",
};

exports.conf = {
          aliases: ["np"],
          cooldown: 5
};