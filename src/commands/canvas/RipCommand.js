const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RipCommand extends BaseCommand {
  constructor() {
    super('rip', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('rip command works');
  }
}