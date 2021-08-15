const BaseCommand = require("../../utils/structures/BaseCommand");
const qs = require("querystring");
const fetch = require("node-fetch");

module.exports = class ImgurCommand extends BaseCommand {
  constructor() {
    super("imgur", "fun", []);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Imgut",
        message.author,
        message.channel,
        message.guild
      );
      const query = args.join(" ");
      const page = Math.floor(Math.random() * 50) + 1;
      const image = Math.floor(Math.random() * 50) + 1;
      const queryString = qs.stringify({
        q: query.replace(/[^a-zA-Z0-9]+/gi, " "),
      });
      const res = await fetch(
        `https://api.imgur.com/3/gallery/search/all/${page}?${queryString}`,
        {
          method: "GET",
          headers: {
            Authorization: `Client-ID ${client.config.imgurclientID}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return message.channel.send(data.data[image].link);
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Imgur"
      );
    }
  }
};
