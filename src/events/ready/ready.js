const BaseEvent = require("../../utils/structures/BaseEvent");
const { WebhookClient } = require("discord.js");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }
  async run(client) {
    try {
      console.log(
        `${client.user.tag} is now online in ${client.guilds.cache.size} servers with ${client.users.cache.size} users !`
      );
      client.user.setActivity("mentions for prefix", { type: "LISTENING" });
    } catch (error) {
      client.oneventerror(error, "Ready");
    }
  }
};
