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
      // const readyWH = new WebhookClient(
      //   "751479123750420530",
      //   "wLwjdx_p8_yCrK0fs_hXCvNzeiOUp94KE_ljZgihRm65D4TNr8xTgmf-KApwyFP8N4B6"
      // );
      //readyWH.send(
      //  `**${client.user.tag} is now online in ${client.guilds.cache.size} servers with ${client.users.cache.size} users !**`
      //);
    } catch (error) {
      client.oneventerror(error, "Ready");
    }
  }
};
