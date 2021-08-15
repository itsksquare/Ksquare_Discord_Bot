const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DrakeCommand extends BaseCommand {
  constructor() {
    super('drake', 'canvas', []);
  }

  run(client, message, args) {
    message.channel.send('drake command works');
  }
}