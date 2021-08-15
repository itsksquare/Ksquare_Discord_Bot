const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VcbanCommand extends BaseCommand {
  constructor() {
    super('vcban', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('vcban command works');
  }
}