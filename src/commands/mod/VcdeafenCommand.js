const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VcdeafenCommand extends BaseCommand {
  constructor() {
    super('vcdeafen', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('vcdeafen command works');
  }
}