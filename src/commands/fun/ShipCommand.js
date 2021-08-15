const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super('ship', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('ship command works');
  }
}