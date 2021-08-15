const { WebhookClient } = require("discord.js");

module.exports = (client) => {
  client.oncommandused = async (command, author, channel, guild) => {
    const cmdWH = new WebhookClient(
      "751448331292508310",
      "z9MOBeJKhKl9lYFHJ-8hBpZE94OMkKeOA5gv9Yz6wgnBW1CNNLDlUgfeP6Omx2AE9mlQ"
    );
    cmdWH.send(
      `**Commmand Used: \`${command}\`\nIn Channel: \`${channel.name}\`\nIn: \`${guild.name}\`\nBy: \`${author.username}, ${author.id}\`**`
    );
  };

  client.oneventerror = async (error, evntname) => {
    const evnterrWH = new WebhookClient(
      "751448773296914444",
      "3PJOD5pGXBFqz-EKDP6LTlUUzflIFmc7YKKTz00kZRkCIgxqurVXcJOpD8Q1aWL_Dt1I"
    );
    evnterrWH.send(`<@${client.owner}>`, {
      embeds: [
        {
          title: `${evntname} Event Error`,
          timestamp: new Date(),
          description: `__**Error**__:\n${error.message}`,
        },
      ],
    });
  };

  client.oncommanderror = async (error, author, guild, channel, command) => {
    channel.send({
      embed: {
        color: client.color.red,
        description:
          "I have encountered an error. This has been reported to the developer and will be solved soon. Thank You for your co-operation.",
      },
    });
    const errWH = new WebhookClient(
      "751448570888060929",
      "VQgURdqRbzH1r_Ty7xW1rnY9UScUI4jghg0ELEPriFHPD57RAFHAN4MwWirbZR69Clv2"
    );
    errWH.send(`<@${client.owner}>`, {
      embeds: [
        {
          title: `${command} Command Error`,
          timestamp: new Date(),
          description: `__**Error**__: ${error.message}`,
          fields: [
            {
              name: "Server",
              value: `${guild.name},\nID: ${guild.id}`,
              inline: true,
            },
            {
              name: "Author",
              value: `${author.username},\nID: ${author.id}`,
              inline: true,
            },
            {
              name: "Channel",
              value: `${channel.name},\nID: ${channel.id}`,
              inline: true,
            },
          ],
        },
      ],
    });
  };
};
