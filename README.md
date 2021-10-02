<h1 align="center">Ksquare Bot</h1>

An all-in one discord bot for fun, moderation, music(soon), and more.

### Table of contents

[Requirements](#requirements)
[Getting Started](#getting-started)

### Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Discord Application](https://discord.com/developers/applications)

### Getting Started

#### Installation

```bash
# clone the repository
git clone https://github.com/itsksquare/Ksquare-Discord-Bot.git

# cd into the folder
cd Ksquare-Discord-Bot

# install dependencies
npm install

```

#### Configuring the bot

- Head over to [Discord Developer Portal](https://discord.com/developers/applications)
- Click on the button "New Application", give it a name and click create
- Click on the tab labelled "Bot", click on the button "Add Bot"
- Under "Token", click on the button labelled "Copy" to copy the bot token
- Open file named configexample.js and paste the bot token in the variable "token"
- Rename the file "configexample.js" to "config.js"
- Follow the intructions in the file to create a webhook

#### Adding the bot to your server

- Head over to [Discord Developer Portal](https://discord.com/developers/applications)
- Open the application you created earlier
- Click on the tab labelled "OAuth2"
- Under "Scopes", check the box next to "bot"
- Copy and paste the link that appears in a new tab
- Login again to your discord account if prompted
- Select your server and click "Authorize"

#### Starting the bot for the first time

```bash
# run the following command in the terminal to start the bot
node ./src/bot.js
# or
npm start
# or if you have nodemon installed, run:
npm run dev

# output should be similar to:
# Test Bot 1#1005 is now online in 1 servers with 1 users !
```
