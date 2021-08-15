const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class BlocktextCommand extends BaseCommand {
  constructor() {
    super("blocktext", "fun", ["block", "blocks"]);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "BlockText",
        message.author,
        message.channel,
        message.guild
      );
      if (!args[0])
        return message.channel.send({
          embed: {
            color: client.color.red,
            description:
              "Please provide some text you need to put in :regional_indicator_b::regional_indicator_l::regional_indicator_o::regional_indicator_c::regional_indicator_k::regional_indicator_s:",
          },
        });
      let blockedChars = args
        .join(" ")
        .toLowerCase()
        .replace(/[a-z]/g, ":regional_indicator_$&:")
        .replace(/1/g, ":one:")
        .replace(/2/g, ":two:")
        .replace(/3/g, ":three:")
        .replace(/4/g, ":four:")
        .replace(/5/g, ":five:")
        .replace(/6/g, ":six:")
        .replace(/7/g, ":seven:")
        .replace(/8/g, ":eight:")
        .replace(/9/g, ":nine:")
        .replace(/0/g, ":zero:");

      if (blockedChars.length > 2000)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description:
              "Couldn't put the provided text in :regional_indicator_b::regional_indicator_l::regional_indicator_o::regional_indicator_c::regional_indicator_k::regional_indicator_s: as the resulting message has characters more than 2000",
          },
        });

      await message.channel.send(blockedChars);
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "BlockText"
      );
    }
  }
};
