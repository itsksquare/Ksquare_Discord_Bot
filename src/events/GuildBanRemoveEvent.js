// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanRemove
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildBanRemoveEvent extends BaseEvent {
  constructor() {
    super('guildBanRemove');
  }
  
  async run(client, guild, user) {
    
  }
}