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
        "751688705340866580",
        "Yqb6Opg2Pjs0J4C_KjALGcfoXvNe7GE3ynMIvijO_KPJolRuQqlfkIcUHotCvU8Pt5Id"
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
    return;
    try {
      Config.findOneAndDelete(
        {
          guildID: guild.id,
        },
        async (err) => {
          if (err) {
            const mongoerrWH = new WebhookClient(
              "749182773385887774",
              "PXU5dKalfmjKf0IDsEFcxR6_QD7UBFDIuFUjTV9RwrWfQBAXYqlFjGTqz_k9mscRuBZj"
            );
            mongoerrWH.send(`<@${client.owner}>`, {
              embeds: [
                {
                  title: "Database Guild Delete Error",
                  timestamp: new Date(),
                  description: err.message,
                },
              ],
            });
            return;
          }
          const configdeleteWH = new WebhookClient(
            "749216977461182565",
            "BgeUAM4pCmFt_3dfL08jLoE-lJ2MR5RnXDpb80PWsd1PVcVqfII-5uNLmkc4NamSM351"
          );
          configdeleteWH.send("", {
            embeds: [
              {
                title: "Server settings deleted",
                description: `**For guild: **${guild.name}\n\n**ServerID: **${guild.id}\n\n**OwnerID: **${guild.ownerID}`,
              },
            ],
          });
        }
      );
    } catch (error) {
      client.oneventerror(error, "Database Delete Error while `guildDelete`");
    }
  }
};
