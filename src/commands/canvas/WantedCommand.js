const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WantedCommand extends BaseCommand {
  constructor() {
    super('wanted', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('wanted command works');
  }
}