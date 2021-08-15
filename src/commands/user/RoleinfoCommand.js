const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class RoleinfoCommand extends BaseCommand {
  constructor() {
    super("roleinfo", "user", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Roleinfo",
        message.author,
        message.channel,
        message.guild
      );
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Roleinfo"
      );
    }
  }
};
