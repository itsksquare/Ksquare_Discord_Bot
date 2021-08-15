const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LoveCommand extends BaseCommand {
  constructor() {
    super('love', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('love command works');
  }
}