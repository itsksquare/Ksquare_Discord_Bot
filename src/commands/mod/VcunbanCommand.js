const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VcunbanCommand extends BaseCommand {
  constructor() {
    super('vcunban', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('vcunban command works');
  }
}