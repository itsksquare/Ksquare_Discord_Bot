const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LockchannelCommand extends BaseCommand {
  constructor() {
    super('lockchannel', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('lockchannel command works');
  }
}