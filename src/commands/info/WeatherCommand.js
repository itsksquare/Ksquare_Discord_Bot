const BaseCommand = require("../../utils/structures/BaseCommand");
const request = require("superagent");

module.exports = class WeatherCommand extends BaseCommand {
  constructor() {
    super("weather ", "info", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Weather",
        message.author,
        message.channel,
        message.guild
      );
      //const city = args.
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Weather"
      );
    }
  }
};
