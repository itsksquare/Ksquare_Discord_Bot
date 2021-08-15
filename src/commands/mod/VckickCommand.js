const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VckickCommand extends BaseCommand {
  constructor() {
    super('vckick', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('vckick command works');
  }
}