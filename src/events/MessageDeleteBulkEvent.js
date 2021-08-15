// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDeleteBulk
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageDeleteBulkEvent extends BaseEvent {
  constructor() {
    super('messageDeleteBulk');
  }
  
  async run(client, messages) {
    
  }
}