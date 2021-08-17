const { Client } = require("discord.js");
const { registerCommands, registerEvents } = require("./utils/registry");
const client = new Client();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = "!";
  client.config = require("../config");
  client.owner = "443885853169811487";
  client.logo = require("./extras/logo");
  client.color = require("./extras/color");
  client.suppserver = "https://discord.gg/fKaA96B";
  client.tessinvite =
    "https://discord.com/api/oauth2/authorize?client_id=732080016971661334&permissions=37084481&scope=bot";
  require("./utils/functions")(client);
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(client.config.token);
})();
