const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class Magic8ballCommand extends BaseCommand {
  constructor() {
    super("magic8ball", "fun", ["8ball"]);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "8ball",
        message.author,
        message.channel,
        message.guild
      );
      if (!args[0])
        return message.channel.send({
          embed: {
            color: bot.color.red,
            description: "You didn't ask me a question.",
          },
        });
      const rand = [
        "Yes",
        "No",
        "Why are you even trying?",
        "Ohhh hell nooo",
        "Maybe",
        "Nope not in this world",
        "Yes of course",
        "Dude go sleep...",
        "This is never gonna happen",
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
      ];
      return message.channel.send({
        embed: {
          color: client.color.cyan,
          footer: {
            text: "KSQUARE",
            icon_url: client.logo.nobglogo,
          },
          author: {
            name: "Magic 8Ball",
          },
          title: `Q: ${args.join(" ")}`,
          description: `Ans: ${
            rand[Math.floor(Math.random() * rand.length).toString(10)]
          }`,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "8ball"
      );
    }
  }
};
