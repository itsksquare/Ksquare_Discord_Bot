const BaseCommand = require("../../utils/structures/BaseCommand");
const { stripIndents } = require("common-tags");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super("help", "user", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Help",
        message.author,
        message.channel,
        message.guild
      );
      message.channel.send({
        embed: {
          color: client.color.black,
          footer: {
            text: "KSQUARE",
            icon_url: client.logo.nobglogo,
          },
          thumbnail: {
            url: client.logo.nobglogo,
          },
          title: "KSQUARE Help",
          description: stripIndents`Hey ${message.author}, I noticed you needed some help. Here are all the links that will help you know more about me and make it a lot easier for you to use me.
          And Thank You for using KSQUARE.`,
          fields: [
            {
              name: "Complete Command Guide",
              value: "[Click Here]()",
              inline: true,
            },
            {
              name: "Website",
              value: "[Click Here]()",
              inline: true,
            },
            {
              name: "Support Server",
              value: "[Click to join](https://discord.gg/Cjwgkxp)",
              inline: true,
            },
            {
              name: "Voting Links",
              value: "Soon",
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
        "Help"
      );
    }
  }
};
