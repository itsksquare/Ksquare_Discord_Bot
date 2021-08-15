const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class EmbedCommand extends BaseCommand {
  constructor() {
    super('embed', 'manager', []);
  }

  run(client, message, args) {
    message.channel.send('embed command works');
  }
}