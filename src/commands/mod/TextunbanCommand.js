const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TextunbanCommand extends BaseCommand {
  constructor() {
    super('textunban', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('textunban command works');
  }
}