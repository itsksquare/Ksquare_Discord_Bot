const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GandhiCommand extends BaseCommand {
  constructor() {
    super('gandhi', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('gandhi command works');
  }
}