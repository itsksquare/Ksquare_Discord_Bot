const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DadjokeCommand extends BaseCommand {
  constructor() {
    super('dadjoke', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('dadjoke command works');
  }
}