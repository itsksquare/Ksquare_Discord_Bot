const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class ScrambleCommand extends BaseCommand {
  constructor() {
    super("scramble", "fun", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Scramble",
        message.author,
        message.channel,
        message.guild
      );
      if (!args[0])
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: "Please provide some text for me to scramble.",
          },
        });
      const shuffle = () => {
        const a = args.join(" ").split("");
        const n = a.length;

        for (let i = n - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
        }
        return a.join("");
      };
      message.channel.send(shuffle(args.join(" ")));
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Scramble"
      );
    }
  }
};
