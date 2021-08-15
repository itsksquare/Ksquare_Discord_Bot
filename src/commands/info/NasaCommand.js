const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NasaCommand extends BaseCommand {
  constructor() {
    super('nasa', 'info', []);
  }

  run(client, message, args) {
    message.channel.send('nasa command works');
  }
}