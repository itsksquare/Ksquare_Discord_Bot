const BaseCommand = require("../../utils/structures/BaseCommand");
const fetch = require("node-fetch");

module.exports = class SlapCommand extends BaseCommand {
  constructor() {
    super("slap", "roleplay", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Slap",
        message.author,
        message.channel,
        message.guild
      );
      const body = await fetch(
        "https://nekos.life/api/v2/img/slap"
      ).then((res) => res.json());
      const muser =
        message.guild.members.cache.get(args[0]) ||
        message.mentions.members.first();
      if (muser)
        return message.channel.send({
          embed: {
            color: client.color.cyan,
            title: `${message.author.username}  slaps  ${muser.user.username}`,
            image: {
              url: body.url,
            },
          },
        });
      else
        return message.channel.send({
          embed: {
            color: client.color.cyan,
            title: `${message.author.username}  slaps`,
            image: {
              url: body.url,
            },
          },
        });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Slap"
      );
    }
  }
};
