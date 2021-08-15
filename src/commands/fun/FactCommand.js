const BaseCommand = require("../../utils/structures/BaseCommand");
const request = require("superagent");

module.exports = class FactCommand extends BaseCommand {
  constructor() {
    super("fact", "fun", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Fact",
        message.author,
        message.channel,
        message.guild
      );
      const res = await request.get(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      message.channel.send({
        embed: {
          color: client.color.cyan,
          description: res.body.text,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Fact"
      );
    }
  }
};
