const BaseCommand = require("../../utils/structures/BaseCommand");
const PermissionGuard = require("../../utils/PermissionGuard");

module.exports = class SlowmodeCommand extends BaseCommand {
  constructor() {
    super(
      "slowmode",
      "mod",
      [],
      new PermissionGuard(["MANAGE_CHANNELS", "ADMINISTRATOR"])
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
