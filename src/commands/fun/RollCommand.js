const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class RollCommand extends BaseCommand {
  constructor() {
    super("roll", "fun", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Roll",
        message.author,
        message.channel,
        message.guild
      );
      const msg = await message.channel.send(`🎲 Rolling...`);
      const replies = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"];
      const result = Math.floor(Math.random() * replies.length);
      msg.edit("", {
        embed: {
          color: client.color.cyan,
          author: {
            name: "🎲 A dice was rolled!!",
          },
          description: `**${message.author} just rolled a \`${replies[result]}\`**`,
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
        "Roll"
      );
    }
  }
};
