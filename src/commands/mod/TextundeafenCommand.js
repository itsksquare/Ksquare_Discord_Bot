const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TextundeafenCommand extends BaseCommand {
  constructor() {
    super('textundeafen', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('textundeafen command works');
  }
}