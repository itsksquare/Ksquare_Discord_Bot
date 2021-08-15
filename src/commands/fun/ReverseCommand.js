const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class ReverseCommand extends BaseCommand {
  constructor() {
    super("reverse", "fun", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Reverse",
        message.author,
        message.channel,
        message.guild
      );
      if (!args[0])
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: "Please provide some text to reverse.",
          },
        });
      return message.channel.send({
        embed: {
          color: client.color.cyan,
          description: args.join(" ").split("").reverse().join(""),
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Reverse"
      );
    }
  }
};
