const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AnnounceCommand extends BaseCommand {
  constructor() {
    super('announce', 'manager', []);
  }

  run(client, message, args) {
    message.channel.send('announce command works');
  }
}