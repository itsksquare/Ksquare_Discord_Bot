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

![image](https://user-images.githubusercontent.com/66553902/135720086-172a8052-9af2-4c52-91f1-365d0a7e2afc.png)

#### Configuring the bot

- Head over to [Discord Developer Portal](https://discord.com/developers/applications)
![image](https://user-images.githubusercontent.com/66553902/135720513-624616d8-0687-4fd9-999c-a13d80335c0e.png)


- Click on the button "New Application", give it a name and click create
![image](https://user-images.githubusercontent.com/66553902/135720672-5f806a66-154e-4940-bc92-f8798dda2631.png)


- Click on the tab labelled "Bot", click on the button "Add Bot"
![image](https://user-images.githubusercontent.com/66553902/135720975-361dc2e5-0cd3-4dd0-85ab-dd54a8262889.png)


- Under "Token", click on the button labelled "Copy" to copy the bot token
![image](https://user-images.githubusercontent.com/66553902/135720998-6f919dd0-2cef-49fc-94ba-e8db76403c47.png)

- Open file named configexample.js and paste the bot token in the variable "token"
![image](https://user-images.githubusercontent.com/66553902/135721301-d8097ab7-2f10-42ea-8dec-16528a7b6894.png)

- Rename the file "configexample.js" to "config.js"
![image](https://user-images.githubusercontent.com/66553902/135721398-891e1093-015b-4eeb-b05d-3571aca157ac.png)

- Follow the intructions in the file to create a webhook
![image](https://user-images.githubusercontent.com/66553902/135721635-cc4cc395-4653-45f6-b4bf-f5bc3e868471.png)
![image](https://user-images.githubusercontent.com/66553902/135722789-305411d1-6c4e-4a77-8038-03799199f3f6.png)



#### Adding the bot to your server

- Head over to [Discord Developer Portal](https://discord.com/developers/applications)
![image](https://user-images.githubusercontent.com/66553902/135721923-ae22cf6e-317a-4f06-921e-65b382b6ca98.png)

- Open the application you created earlier
![image](https://user-images.githubusercontent.com/66553902/135721958-85336829-6bf4-4da6-ba14-1acefb30ecb8.png)

- Click on the tab labelled "OAuth2"
![image](https://user-images.githubusercontent.com/66553902/135721979-2531748e-ab45-4725-90fc-ca5c922a8f17.png)

- Under "Scopes", check the box next to "bot"
![image](https://user-images.githubusercontent.com/66553902/135722006-c2f14d3c-88aa-4335-93cb-a227120ee453.png)

- Copy and paste the link that appears in a new tab
- Login again to your discord account if prompted
![image](https://user-images.githubusercontent.com/66553902/135722137-ac8eb1f2-e5bc-40cb-8bf8-c8db20c56f6a.png)

- Select your server and click "Authorize"
![image](https://user-images.githubusercontent.com/66553902/135722219-3db5e01c-e707-47e4-9f15-15bba408788d.png)


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
![image](https://user-images.githubusercontent.com/66553902/135722639-dfe4af64-11f0-4dbc-a56f-4a91b5b8934b.png)

Congrats 🎉
