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
        "748879070183555133",
        "hLVF52Gd1DDBNAlUCqLSKfdvk5IUn1IxZ1QnGTs-O9GPUvKGhC8JU4kM_6LpqA2LfYiB"
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
