const BaseCommand = require("../../utils/structures/BaseCommand");
const randomPuppy = require("random-puppy");

module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super("meme", "meme", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Meme",
        message.author,
        message.channel,
        message.guild
      );
      const subReddits = ["dankmeme", "meme", "me_irl"];
      const random = subReddits[Math.floor(Math.random() * subReddits.length)];
      const img = await randomPuppy(random);

      return message.channel.send({
        embed: {
          color: client.color.cyan,
          title: "KSQUARE MEME",
          image: {
            url: img,
          },
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Meme"
      );
    }
  }
};
