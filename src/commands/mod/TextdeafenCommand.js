const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TextdeafenCommand extends BaseCommand {
  constructor() {
    super('textdeafen', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('textdeafen command works');
  }
}