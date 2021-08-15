const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TictactoeCommand extends BaseCommand {
  constructor() {
    super('tictactoe', 'multiplayer', []);
  }

  run(client, message, args) {
    message.channel.send('tictactoe command works');
  }
}