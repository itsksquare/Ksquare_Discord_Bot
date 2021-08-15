const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WastedCommand extends BaseCommand {
  constructor() {
    super('wasted', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('wasted command works');
  }
}