const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class LeetCommand extends BaseCommand {
  constructor() {
    super("leet", "fun", ["1337"]);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Leet",
        message.author,
        message.channel,
        message.guild
      );
      if (!args[0])
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: "Please provice some text to convert to 1337(LEET)",
          },
        });
      let code = args.join(" ");
      code = code.replace(/a/gi, "4");
      code = code.replace(/e/gi, "3");
      code = code.replace(/l/gi, "1");
      code = code.replace(/o/gi, "0");
      code = code.replace(/s/gi, "5");
      code = code.replace(/t/gi, "7");

      message.channel.send({
        embed: {
          color: client.color.cyan,
          title: "Leet Text",
          description: code,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Leet"
      );
    }
  }
};
