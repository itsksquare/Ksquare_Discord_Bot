const BaseEvent = require("../../utils/structures/BaseEvent");

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client, message) {
    try {
      if (message.author.bot) return;
      if (message.guild.unavailable) return;

      if (
        message.mentions.members.first() &&
        message.mentions.members.first().id === client.user.id
      )
        return message.channel.send({
          embed: {
            color: client.color.black,
            footer: {
              name: "KSQUARE",
              icon_url: client.logo.nobglogo,
            },
            description: `Hello there <@${message.author.id}>, my prefix for this server is \`${client.prefix}\``,
          },
        });

      if (message.content.startsWith(client.prefix)) {
        const [cmdName, ...cmdArgs] = message.content
          .slice(client.prefix.length)
          .trim()
          .split(/\s+/);
        const command = client.commands.get(cmdName);
        if (command && command.permissions) {
          if (!command.permissions.check(message.member.permissions.toArray()))
            return message.channel.send({
              embed: {
                color: client.color.red,
                description:
                  "**You __DO NOT__ have enough permissions to perform this command.**",
              },
            });
          if (
            !command.permissions.check(message.guild.me.permissions.toArray())
          )
            return message.channel.send({
              embed: {
                color: client.color.red,
                description:
                  "**I __DO NOT__ have enough permissions to perform this command.**",
              },
            });
          command.run(client, message, cmdArgs);
        } else if (command && !command.permissions) {
          command.run(client, message, cmdArgs);
        }
      }
    } catch (error) {
      client.oneventerror(error, "Message");
    }
  }
};
