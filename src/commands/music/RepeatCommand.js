const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class RepeatCommand extends BaseCommand {
  constructor() {
    super("repeat", "music", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Repeat",
        message.author,
        message.channel,
        message.guild
      );
      return message.channel.send({
        embed: {
          title: "Premium Only",
          color: client.color.red,
          description: `Music commands can only be used in the premium version of KSQUARE. In order to buy premium please head over to the [Support Server](${client.suppserver}) and contact the developer. The automatic payment mode is currently being setup.\n\n**OR**\n\nIf you would like to try out music before buying premium, Invite [TESS](${client.tessinvite}) our high quality free music bot.`,
          footer: {
            text: "KSQUARE",
            icon_url: client.logo.nobglogo,
          },
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Repeat"
      );
    }
  }
};
