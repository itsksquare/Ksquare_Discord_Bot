const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TriggeredCommand extends BaseCommand {
  constructor() {
    super('triggered', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('triggered command works');
  }
}