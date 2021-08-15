const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PokemonCommand extends BaseCommand {
  constructor() {
    super('pokemon', 'pokemon', []);
  }

  run(client, message, args) {
    message.channel.send('pokemon command works');
  }
}