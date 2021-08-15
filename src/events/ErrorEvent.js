// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-error
const BaseEvent = require("../utils/structures/BaseEvent");
const { WebhookClient } = require("discord.js");

module.exports = class ErrorEvent extends BaseEvent {
  constructor() {
    super("error");
  }

  async run(client, error) {
    try {
      const errWH = new WebhookClient(
        "751676726928736266",
        "0Ek5TM1g59xUEa4PM-o3aa2wiJbO6xQVUrdQvz3_MkCJlvvA82RNuU0HrkANQk0HRPY_"
      );
      errWH.send(`<@${client.owner}>`, {
        embeds: [
          {
            title: "Bot Error Event Triggered",
            description: error.message,
            timestamp: new Date(),
          },
        ],
      });
    } catch (error) {
      client.oneventerror(error, "error");
    }
  }
};
