const BaseCommand = require("../../utils/structures/BaseCommand");
const request = require("superagent");

module.exports = class JokeCommand extends BaseCommand {
  constructor() {
    super("joke", "fun", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Joke",
        message.author,
        message.channel,
        message.guild
      );
      const res = await request.get("https://api.icndb.com/jokes/random");
      message.channel.send({
        embed: {
          color: client.color.cyan,
          description: res.body.value.joke,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Joke"
      );
    }
  }
};
