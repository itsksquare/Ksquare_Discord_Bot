const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class GifCommand extends BaseCommand {
  constructor() {
    super("gif", "fun", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Gif",
        message.author,
        message.channel,
        message.guild
      );
      const query = args.join(" ");
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Gif"
      );
    }
  }
};
