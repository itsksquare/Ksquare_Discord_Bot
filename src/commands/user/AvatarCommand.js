const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super("avatar", "user", ["av"]);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "Avatar",
        message.author,
        message.channel,
        message.guild
      );
      const muser =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;
      if (!muser)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: "Please provide a valid user",
          },
        });
      message.channel.send({
        embed: {
          color: client.color.cyan,
          title: `${muser.user.username}#${muser.user.discriminator}'s Avatar`,
          description: `[Link](${muser.user.displayAvatarURL({
            dynamic: true,
            size: 2048,
          })})`,
          image: {
            url: `${muser.user.displayAvatarURL({
              size: 2048,
              dynamic: true,
            })}`,
          },
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Avatar"
      );
    }
  }
};
