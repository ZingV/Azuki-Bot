exports.run = async (client, message, args) => {
}

exports.help = {
         name: "queue",
         description: "checking music queue",
         usage: "q",
         example: "/q",
};

exports.conf = {
          aliases: ["q"],
          cooldown: 5
};