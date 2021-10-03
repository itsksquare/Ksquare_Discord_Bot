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
          description: stripIndents`Hey ${message.author}, I noticed you needed some help. Here are all the commands I can perform.
          My prefix for this server is \`${client.prefix}\``,
          fields: [
            {
              name: "Moderation",
              value: "`ban` `kick` `nickname`",
            },
            {
              name: "Fun",
              value:
                "`advice` `blocktext` `fact` `flip` `imgur` `joke` `leet` `magic8ball` `morsecode` `reverse` `roll` `scramble` `tapcode` `yomomma` `meme` `cuddle` `feed` `hug` `kiss` `pat` `poke` `slap` `smug` `tickle` `insta`",
            },
            {
              name: "Information",
              value:
                "`avatar` `about` `serverinfo` `whois` `invite` `ping` `report` `suggest` `uptime`",
            },
            {
              name: "Support Server",
              value: "[Click to Join]()",
              inline: true,
            },
            {
              name: "Website",
              value: "[Click Here]()",
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
