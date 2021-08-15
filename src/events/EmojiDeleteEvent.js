// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class EmojiDeleteEvent extends BaseEvent {
  constructor() {
    super('emojiDelete');
  }
  
  async run(client, emoji) {
    
  }
}