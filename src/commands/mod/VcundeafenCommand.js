const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VcundeafenCommand extends BaseCommand {
  constructor() {
    super('vcundeafen', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send('vcundeafen command works');
  }
}