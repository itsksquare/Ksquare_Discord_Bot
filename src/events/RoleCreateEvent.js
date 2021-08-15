// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class RoleCreateEvent extends BaseEvent {
  constructor() {
    super('roleCreate');
  }
  
  async run(client, role) {
    
  }
}