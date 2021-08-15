const BaseCommand = require("../../utils/structures/BaseCommand");
const fetch = require("node-fetch");

module.exports = class InstagramCommand extends BaseCommand {
  constructor() {
    super("instagram", "info", ["insta"]);
  }

  async run(client, message, args) {
    try {
      client.oncommandused(
        "Instagram",
        message.author,
        message.channel,
        message.guild
      );
      const name = args.join("_");
      if (!name)
        return message.channel.send({
          embed: {
            color: client.color.red,
            description:
              "Please provide the username of the person whose profile you would like to view.",
          },
        });
      const url = `https://instagram.com/${name}/?__a=1`;
      let res;
      try {
        res = await fetch(url).then((url) => url.json());
      } catch (error) {
        console.log(error);
        return message.channel.send({
          embed: {
            color: client.color.red,
            description:
              "I couldn't find that account. Please try searching again",
          },
        });
      }
      const account = res.graphql.user;
      return message.channel.send({
        embed: {
          color: client.color.cyan,
          title: account.username,
          url: `https://instagram.com/${name}`,
          thumbnail: {
            url: account.profile_pic_url_hd,
          },
          fields: [
            {
              name: "Full Name",
              value: account.full_name,
              inline: true,
            },
            {
              name: "Biography",
              value: account.biography.length == 0 ? "None" : account.biography,
              inline: true,
            },
            {
              name: "Posts",
              value: account.edge_owner_to_timeline_media.count,
              inline: true,
            },
            {
              name: "Followers",
              value: account.edge_followed_by.count,
              inline: true,
            },
            {
              name: "Following",
              value: account.edge_follow.count,
              inline: true,
            },
            {
              name: "Account Type",
              value: account.is_private ? "Private" : "Public",
              inline: true,
            },
          ],
        },
      });
    } catch (error) {
      client.oncommanderror(
        error,
        message.author,
        message.guild,
        message.channel,
        "Instagram"
      );
    }
  }
};
