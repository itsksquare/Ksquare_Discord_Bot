const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class JumboCommand extends BaseCommand {
  constructor() {
    super("jumbo", "fun", []);
  }

  run(client, message, args) {
    return;
    try {
      client.oncommandused(
        "Jumbo",
        message.author,
        message.channel,
        message.guild
      );
      let emoji = message.guild.emojis.cache.find(
        (emoji) => emoji.name === args[0]
      );
      if (!emoji) return message.channel.send("nope");
      message.channel.send({
        files: [emoji.url],
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Jumbo"
      );
    }
  }
};
