const { Client } = require("discord.js");
const { registerCommands, registerEvents } = require("./utils/registry");
const client = new Client();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = "!";
  client.config = require("../config");
  client.owner = "OWNER's_ID";
  client.logo = require("./extras/logo");
  client.color = require("./extras/color");
  require("./utils/functions")(client);
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(client.config.token);
})();
