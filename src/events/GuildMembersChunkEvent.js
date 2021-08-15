// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMembersChunk
  const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMembersChunkEvent extends BaseEvent {
  constructor() {
    super('guildMembersChunk');
  }
  
  async run(client, members, guild) {
    
  }
}