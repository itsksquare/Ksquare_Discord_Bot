const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TextbanCommand extends BaseCommand {
  constructor() {
    super('textban', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('textban command works');
  }
}