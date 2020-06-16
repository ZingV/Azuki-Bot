exports.help = {
         name: "volume",
         description: "change volume",
         usage: "v <amount> max 100%",
         example: "/v 80",
};

exports.conf = {
          aliases: ["v"],
          cooldown: 5
};