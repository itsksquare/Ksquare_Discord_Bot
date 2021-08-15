const BaseCommand = require("../../utils/structures/BaseCommand");
const PermissionGuard = require("../../utils/PermissionGuard");

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super(
      "kick",
      "mod",
      [],
      new PermissionGuard(["KICK_MEMBERS", "ADMINISTRATOR"])
    );
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Kick",
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
              "Please mention or provide the User ID of the member you would like to kick.",
          },
        });
      if (!member.kickable)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: `I couldn't kick ${member}. This may be due to the member having higher permissions than me.`,
          },
        });
      let reason = `${message.author.username}: ${args.slice(1).join(" ")}`;
      console.log(reason);
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Kick"
      );
    }
  }
};
