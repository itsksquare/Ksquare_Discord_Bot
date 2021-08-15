const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LogchannelCommand extends BaseCommand {
  constructor() {
    super('logchannel', 'settings', []);
  }

  run(client, message, args) {
    message.channel.send('logchannel command works');
  }
}