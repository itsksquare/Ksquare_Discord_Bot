// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable
const BaseEvent = require("../utils/structures/BaseEvent");
const { WebhookClient } = require("discord.js");

module.exports = class GuildUnavailableEvent extends BaseEvent {
  constructor() {
    super("guildUnavailable");
  }

  async run(client, guild) {
    try {
      const guildUnavailableWH = new WebhookClient(
        client.config.WHid,
        client.config.WHtoken
      );
      guildUnavailableWH.send(" ", {
        embeds: [
          {
            author: {
              name: "Guild Unavailable",
            },
            title: guild.name,
            timestamp: new Date(),
            fields: [
              {
                name: "Server ID",
                value: guild.id,
                inline: true,
              },
              {
                name: "Server Owner",
                value: guild.owner,
                inline: true,
              },
              {
                name: "Server Owner ID",
                value: guild.owner.id,
                inline: true,
              },
              {
                name: "Server Members",
                value: guild.memberCount,
                inline: true,
              },
            ],
          },
        ],
      });
    } catch (error) {
      client.oneventerror(error, "guildUnavailable");
    }
  }
};
