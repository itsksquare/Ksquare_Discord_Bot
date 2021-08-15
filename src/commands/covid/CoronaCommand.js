const BaseCommand = require("../../utils/structures/BaseCommand");
const track = require("novelcovid");

module.exports = class CoronaCommand extends BaseCommand {
  constructor() {
    super("corona", "covid", ["covid"]);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Covid",
        message.author,
        message.channel,
        message.guild
      );
      const country = args.join(" ");
      let corona = await track.countries(country);
      if (!corona) return message.channel.send("not found");
      console.log(corona.flag);
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Covid"
      );
    }
  }
};
