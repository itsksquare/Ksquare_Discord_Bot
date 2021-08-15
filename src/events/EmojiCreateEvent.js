// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class EmojiCreateEvent extends BaseEvent {
  constructor() {
    super('emojiCreate');
  }
  
  async run(client, emoji) {
    
  }
}
