const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ModiCommand extends BaseCommand {
  constructor() {
    super('modi', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('modi command works');
  }
}