const BaseCommand = require("../../utils/structures/BaseCommand");
const { stripIndents } = require("common-tags");

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super("invite", "bot", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Invite",
        message.author,
        message.channel,
        message.guild
      );
      return message.channel.send({
        embed: {
          color: client.color.cyan,
          footer: {
            text: "KSQUARE",
            icon_url: client.logo.nobglogo,
          },
          title: "Invite KSQUARE",
          description: stripIndents`**[ADMINISTRATOR PERMISSIONS](${await client.generateInvite(
            2146958847
          )})\n
          [MODERATOR PERMISSIONS](${await client.generateInvite(804650307)})\n
          [NO PERMISSIONS](${await client.generateInvite(0)})**`,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Invite"
      );
    }
  }
};
