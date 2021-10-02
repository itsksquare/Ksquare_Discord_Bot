const { Client } = require("discord.js");
const { registerCommands, registerEvents } = require("./utils/registry");
const client = new Client();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = "!"; //The bot's prefix
  client.config = require("../config");
  client.owner = "443885853169811487"; //The bot's owner's ID, you can change this to your discord ID
  client.logo = require("./extras/logo");
  client.color = require("./extras/color");
  require("./utils/functions")(client);
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(client.config.token);
})();
