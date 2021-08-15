const BaseCommand = require("../../utils/structures/BaseCommand");
const PermissionGuard = require("../../utils/PermissionGuard");

module.exports = class CleanCommand extends BaseCommand {
  constructor() {
    super(
      "clean",
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
