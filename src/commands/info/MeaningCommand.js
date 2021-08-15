const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class MeaningCommand extends BaseCommand {
  constructor() {
    super("meaning", "info", []);
  }

  run(client, message, args) {
    message.channel.send("meaning command works");
  }
};
