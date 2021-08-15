const BaseCommand = require("../../utils/structures/BaseCommand");
const PermissionGuard = require("../../utils/PermissionGuard");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super(
      "test",
      "testing",
      [],
      new PermissionGuard(["KICK_MEMBERS", "ADMINISTRATOR"])
    );
  }

  async run(client, message, args) {
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
