const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnlockchannelCommand extends BaseCommand {
  constructor() {
    super('unlockchannel', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('unlockchannel command works');
  }
}