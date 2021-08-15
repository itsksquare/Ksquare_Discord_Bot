const BaseCommand = require("../../utils/structures/BaseCommand");
const { stripIndents } = require("common-tags");

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super("ping", "bot", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Ping",
        message.author,
        message.channel,
        message.guild
      );
      const msg = await message.channel.send("Pinging...");
      msg.edit(" ", {
        embed: {
          color: client.color.cyan,
          footer: {
            text: "KSQUARE",
            icon_url: client.logo.nobglogo,
          },
          description: stripIndents`**Ping: ${
            msg.createdTimestamp - message.createdTimestamp
          }ms\n
          WebSocket: ${client.ws.ping}ms**`,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Ping"
      );
    }
  }
};
