const BaseCommand = require("../../utils/structures/BaseCommand");
const request = require("superagent");

module.exports = class AdviceCommand extends BaseCommand {
  constructor() {
    super("advice", "fun", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Advice",
        message.author,
        message.channel,
        message.guild
      );
      const res = await request.get("https://api.adviceslip.com/advice");
      const advice = JSON.parse(res.text).slip.advice;
      message.channel.send({
        embed: {
          color: client.color.cyan,
          title: "My advice to you",
          description: advice,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Advice"
      );
    }
  }
};
