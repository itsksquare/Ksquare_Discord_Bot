const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class QuoteCommand extends BaseCommand {
  constructor() {
    super('quote', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('quote command works');
  }
}