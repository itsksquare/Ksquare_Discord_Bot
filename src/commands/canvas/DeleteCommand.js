const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DeleteCommand extends BaseCommand {
  constructor() {
    super('delete', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('delete command works');
  }
}