// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildBanAddEvent extends BaseEvent {
  constructor() {
    super('guildBanAdd');
  }
  
  async run(client, guild, user) {
    
  }
}