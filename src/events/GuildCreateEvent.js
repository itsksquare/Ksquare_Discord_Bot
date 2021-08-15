// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require("../utils/structures/BaseEvent");
const { WebhookClient } = require("discord.js");
//const Config = require("../dbmodels/guild");

module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }

  async run(client, guild) {
    try {
      const guildCreateWH = new WebhookClient(
        "751687889661984770",
        "uQzVpQks86dLnek00RO8IUb00zZ_coAQbjGD_7bs3MEA6zBQDhrytcy1ZKd078zpkF-o"
      );
      guildCreateWH.send(" ", {
        embeds: [
          {
            author: {
              name: "Guild Create",
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
      client.oneventerror(error, "Webhook Send Error while guildCreate");
    }

    try {
      if (
        guild.members.cache.filter((member) => !member.user.bot).size <= 10 &&
        guild.owner.id != client.owner
      ) {
        guild.leave();
        return;
      }
    } catch (error) {
      client.oneventerror(error, "small guild leave error while `guildCreate`");
    }
    return;
    try {
      Config.findOne(
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
                  title: "Database Guild Create Error",
                  timestamp: new Date(),
                  description: err.message,
                },
              ],
            });
            return;
          }

          const newConfig = new Config({
            guildID: guild.id,
            prefix: client.prefix,
            guildName: guild.name,
            guildMembers: guild.memberCount,
            guildOwnerID: guild.ownerID,
          });
          await newConfig.save();
          const newConfigWH = new WebhookClient(
            "749216977461182565",
            "BgeUAM4pCmFt_3dfL08jLoE-lJ2MR5RnXDpb80PWsd1PVcVqfII-5uNLmkc4NamSM351"
          );
          newConfigWH.send("", {
            embeds: [
              {
                title: "New server settings created",
                description: `**For guild: **${guild.name}\n\n**ServerID: **${guild.id}\n\n**OwnerID: **${guild.ownerID}`,
              },
            ],
          });
        }
      );
    } catch (error) {
      client.oneventerror(error, "Database Create Error while `guildCreate`");
    }
  }
};
