const BaseCommand = require("../../utils/structures/BaseCommand");

module.exports = class TapcodeCommand extends BaseCommand {
  constructor() {
    super("tapcode", "fun", []);
  }

  run(client, message, args) {
    try {
      client.oncommandused(
        "TapCode",
        message.author,
        message.channel,
        message.guild
      );
      if (!args[0])
        return message.channel.send({
          embed: {
            color: client.color.red,
            description: "Please provide some code to decode.",
          },
        });
      let code = args.join(" ").toLowerCase();
      const tap = "•";
      const sp = " ";
      const tapCode = {
        a: tap + sp + tap,
        b: tap + sp + tap + tap,
        c: tap + sp + tap + tap + tap,
        d: tap + sp + tap + tap + tap + tap,
        e: tap + sp + tap + tap + tap + tap + tap,
        f: tap + tap + sp + tap,
        g: tap + tap + sp + tap + tap,
        h: tap + tap + sp + tap + tap + tap,
        i: tap + tap + sp + tap + tap + tap + tap,
        j: tap + tap + sp + tap + tap + tap + tap + tap,
        k: tap + sp + tap + tap + tap,
        l: tap + tap + tap + sp + tap,
        m: tap + tap + tap + sp + tap + tap,
        n: tap + tap + tap + sp + tap + tap + tap,
        o: tap + tap + tap + sp + tap + tap + tap + tap,
        p: tap + tap + tap + sp + tap + tap + tap + tap + tap,
        q: tap + tap + tap + tap + sp + tap,
        r: tap + tap + tap + tap + sp + tap + tap,
        s: tap + tap + tap + tap + sp + tap + tap + tap,
        t: tap + tap + tap + tap + sp + tap + tap + tap + tap,
        u: tap + tap + tap + tap + sp + tap + tap + tap + tap + tap,
        v: tap + tap + tap + tap + tap + sp + tap,
        w: tap + tap + tap + tap + tap + sp + tap + tap,
        x: tap + tap + tap + tap + tap + sp + tap + tap + tap,
        y: tap + tap + tap + tap + tap + sp + tap + tap + tap + tap,
        z: tap + tap + tap + tap + tap + sp + tap + tap + tap + tap + tap,
        " ": "\u2001",
      };
      code = code.replace(/\. /g, " x ");
      code = code.replace(/./g, (x) => `${tapCode[x]}\u2001`).trim();
      if (code.length > 2000)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description:
              "Couldn't encode the provided text as the resulting message has characters more than 2000",
          },
        });

      message.channel.send({
        embed: {
          color: client.color.cyan,
          title: "Tap Code",
          description: `**${code}**`,
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "TapCode"
      );
    }
  }
};
