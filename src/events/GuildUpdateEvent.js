// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildUpdateEvent extends BaseEvent {
  constructor() {
    super('guildUpdate');
  }
  
  async run(client, oldGuild, newGuild) {
    
  }
}