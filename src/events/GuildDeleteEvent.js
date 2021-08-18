// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildDelete
const BaseEvent = require("../utils/structures/BaseEvent");
const { WebhookClient } = require("discord.js");
//const Config = require("../dbmodels/guild");

module.exports = class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super("guildDelete");
  }

  async run(client, guild) {
    try {
      const guildCreateWH = new WebhookClient(
        client.config.WHid,
        client.config.WHtoken
      );
      guildCreateWH.send(" ", {
        embeds: [
          {
            author: {
              name: "Guild Delete",
            },
            title: guild.name,
            thumbnail: guild.iconURL(),
            timestamp: new Date(),
            footer: {
              text: `Total Guilds: ${client.guilds.cache.size} | Total Users: ${client.users.cache.size}`,
            },
            fields: [
              {
                name: "Guild ID",
                value: guild.id,
              },
              {
                name: "Owner Name",
                value: `${guild.owner.user.username}#${guild.owner.user.discriminator}`,
              },
              {
                name: "Owner ID",
                value: guild.owner.id,
              },
              {
                name: "Total Members",
                value: guild.memberCount,
              },
            ],
          },
        ],
      });
    } catch (error) {
      client.oneventerror(error, "Webhook Send Error while guildDelete");
    }
    if (
      guild.members.cache.filter((member) => !member.user.bot).size <= 10 &&
      guild.owner.id != client.owner
    )
      return;
  }
};
