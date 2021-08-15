const BaseCommand = require("../../utils/structures/BaseCommand");
const PermissionGuard = require("../../utils/PermissionGuard");

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super(
      "ban",
      "mod",
      [],
      new PermissionGuard(["BAN_MEMBERS", "ADMINISTRATOR"])
    );
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Ban",
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
              "Please mention or provide a valid user ID of the member you want to Ban.",
          },
        });
      if (!member.bannable)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: `I couldn't Ban ${member}. This may be due to the member having higher permissions than me.`,
          },
        });
      let reason = `${message.author.username}: ${args.slice(1).join(" ")}`;
      if (!reason) member.ban({ days: 0, reason: `` });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Ban"
      );
    }
  }
};
