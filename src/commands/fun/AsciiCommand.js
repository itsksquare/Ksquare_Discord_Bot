const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AsciiCommand extends BaseCommand {
  constructor() {
    super('ascii', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('ascii command works');
  }
}