const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RpsCommand extends BaseCommand {
  constructor() {
    super('rps', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('rps command works');
  }
}