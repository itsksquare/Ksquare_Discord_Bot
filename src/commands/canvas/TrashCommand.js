const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TrashCommand extends BaseCommand {
  constructor() {
    super('trash', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('trash command works');
  }
}