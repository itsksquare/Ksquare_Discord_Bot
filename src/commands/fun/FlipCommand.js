const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class FlipCommand extends BaseCommand {
  constructor() {
    super("flip", "fun", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Flip",
        message.author,
        message.channel,
        message.guild
      );
      function getrandomint(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var msg = Array(2);
      msg[1] = "Heads";
      msg[2] = "Tails";
      var x = getrandomint(0, 8);
      if (x < 4) {
        message.channel.send({
          embed: {
            color: client.color.cyan,
            description: `I flipped a \`${msg[1]}\``,
          },
        });
      } else {
        message.channel.send({
          embed: {
            color: client.color.cyan,
            description: `I flipped a \`${msg[2]}\``,
          },
        });
      }
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Flip"
      );
    }
  }
};
