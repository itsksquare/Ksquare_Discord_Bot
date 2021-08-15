const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UrbanCommand extends BaseCommand {
  constructor() {
    super('urban', 'info', []);
  }

  run(client, message, args) {
    message.channel.send('urban command works');
  }
}