const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class JailCommand extends BaseCommand {
  constructor() {
    super('jail', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('jail command works');
  }
}