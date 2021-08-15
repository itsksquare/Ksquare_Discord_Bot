const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class WhoisCommand extends BaseCommand {
  constructor() {
    super("whois", "user", ["userinfo", "aboutuser"]);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Whois",
        message.author,
        message.channel,
        message.guild
      );
      const muser =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;
      if (!muser)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: "Please provide a valid user",
          },
        });
      message.channel.send({
        embed: {
          color: client.color.cyan,
          title: "USER INFO",
          author: {
            name: `${muser.user.username}#${muser.user.discriminator}`,
          },
          thumbnail: {
            url: muser.user.displayAvatarURL({ dynamic: true, size: 2048 }),
          },
          description: `**Below is all the information I have on ${muser}**`,
          footer: {
            text: "KSQUARE",
            icon_url: client.logo.nobglogo,
          },
          fields: [
            {
              name: `Username`,
              value: muser.user.username,
              inline: true,
            },
            {
              name: `Discriminator`,
              value: muser.user.discriminator,
              inline: true,
            },
            {
              name: `Server Nick`,
              value: muser.displayName,
              inline: true,
            },
            {
              name: `Avatar URL`,
              value: `[Link](${muser.user.displayAvatarURL({
                dynamic: true,
                size: 2048,
              })})`,
              inline: true,
            },
            {
              name: `User ID`,
              value: muser.user.id,
              inline: true,
            },
            {
              name: `Status`,
              value: muser.presence.status,
              inline: true,
            },
            {
              name: `Account Created`,
              value: muser.user.createdAt.toDateString(),
              inline: true,
            },
            {
              name: `Server Joined`,
              value: muser.joinedAt.toDateString(),
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
        "Whois"
      );
    }
  }
};
