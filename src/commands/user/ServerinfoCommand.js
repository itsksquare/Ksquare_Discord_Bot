const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class ServerinfoCommand extends BaseCommand {
  constructor() {
    super("serverinfo", "user", ["server", "aboutserver"]);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Serverinfo",
        message.author,
        message.channel,
        message.guild
      );
      if (message.guild.unavailable) return;
      message.channel.send({
        embed: {
          color: client.color.cyan,
          timestamp: new Date(),
          footer: {
            text: "KSQUARE",
            icon_url: client.logo.nobglogo,
          },
          title: `About ${message.guild.name}`,
          image: {
            url: message.guild.splashURL({ dynamic: true, size: 2048 }),
          },
          thumbnail: {
            url: message.guild.iconURL({ dynamic: true, size: 2048 }),
          },
          fields: [
            {
              name: "Owner",
              value: `${message.guild.owner}`,
              inline: true,
            },
            {
              name: "ID",
              value: message.guild.id,
              inline: true,
            },
            {
              name: "Region",
              value: message.guild.region.toUpperCase(),
              inline: true,
            },
            {
              name: "Total Members Count",
              value: message.guild.memberCount,
              inline: true,
            },
            {
              name: "Bots Count",
              value: message.guild.members.cache.filter(
                (mem) => mem.user.bot === true
              ).size,
              inline: true,
            },
            {
              name: "Online Members",
              value: message.guild.members.cache.filter(
                (mem) => mem.presence.status != "offline"
              ).size,
              inline: true,
            },
            {
              name: "Channels",
              value: message.guild.channels.cache.size,
              inline: true,
            },
            {
              name: "Roles",
              value: message.guild.roles.cache.size,
              inline: true,
            },
            {
              name: "Emojis",
              value: message.guild.emojis.cache.size,
              inline: true,
            },
            {
              name: "Created On",
              value: message.guild.createdAt.toDateString(),
              inline: true,
            },
            {
              name: "Verification Level",
              value: message.guild.verificationLevel,
              inline: true,
            },
            {
              name: "Server Boost Level",
              value: `Level ${message.guild.premiumTier}`,
              inline: true,
            },
            {
              name: "Number Of Boosts",
              value: `${message.guild.premiumSubscriptionCount} Boosts`,
              inline: true,
            },
          ],
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Serverinfo"
      );
    }
  }
};
