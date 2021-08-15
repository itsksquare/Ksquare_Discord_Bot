const BaseCommand = require("../../utils/structures/BaseCommand");
const PermissionGuard = require("../../utils/PermissionGuard");

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super(
      "nickname",
      "mod",
      ["nick"],
      new PermissionGuard(["MANAGE_MEMBERS", "ADMINISTRATOR"])
    );
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Nickname",
        message.author,
        message.channel,
        message.guild
      );
      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!member)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description:
              "Please provide a valid user whose nickname you would like to change.",
          },
        });
      if (!member.manageable)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: `I couldn't change ${member}'s nickname. This may be due to the member having higher permissions than me.`,
          },
        });
      let reason = `Responsible user: ${message.author.username}`;
      let newnick = args.slice(1).join(" ");
      member.setNickname(newnick, reason);
      message.channel.send({
        embed: {
          color: client.color.cyan,
          description: `Changed ${member.user.username}#${member.user.discriminator}'s nickname to ${newnick}`,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Nickname"
      );
    }
  }
};
