const BaseCommand = require("../../utils/structures/BaseCommand");
const PermissionGuard = require("../../utils/PermissionGuard");

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super(
      "purge",
      "mod",
      [],
      new PermissionGuard(["MANAGE_MESSAGES", "ADMINISTRATOR"])
    );
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "About",
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
        "About"
      );
    }
  }
};
