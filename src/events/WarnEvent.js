// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-warn
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class WarnEvent extends BaseEvent {
  constructor() {
    super('warn');
  }
  
  async run(client, info) {
    
  }
}