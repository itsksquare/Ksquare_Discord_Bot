// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-userUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class UserUpdateEvent extends BaseEvent {
  constructor() {
    super('userUpdate');
  }
  
  async run(client, oldUser, newUser) {
    
  }
}