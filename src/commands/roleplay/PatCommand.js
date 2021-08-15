const BaseCommand = require("../../utils/structures/BaseCommand");
const fetch = require("node-fetch");

module.exports = class PatCommand extends BaseCommand {
  constructor() {
    super("pat", "roleplay", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Pat",
        message.author,
        message.channel,
        message.guild
      );
      const body = await fetch(
        "https://nekos.life/api/v2/img/pat"
      ).then((res) => res.json());
      const muser =
        message.guild.members.cache.get(args[0]) ||
        message.mentions.members.first();
      if (muser)
        return message.channel.send({
          embed: {
            color: client.color.cyan,
            title: `${message.author.username}  pats  ${muser.user.username}`,
            image: {
              url: body.url,
            },
          },
        });
      else
        return message.channel.send({
          embed: {
            color: client.color.cyan,
            title: `${message.author.username}  pats`,
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
        "Pat"
      );
    }
  }
};
