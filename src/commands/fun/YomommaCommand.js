const BaseCommand = require("../../utils/structures/BaseCommand");
const request = require("superagent");

module.exports = class YomommaCommand extends BaseCommand {
  constructor() {
    super("yomomma", "fun", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Yomomma",
        message.author,
        message.channel,
        message.guild
      );
      const res = await request.get("https://api.yomomma.info");
      const joke = res.body.joke;
      message.channel.send({
        embed: {
          color: client.color.cyan,
          description: joke,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Yomomma"
      );
    }
  }
};
