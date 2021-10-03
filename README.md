<h1 align="center">Ksquare Bot</h1>

An all-in one discord bot for fun, moderation, music(soon), and more.

## Table of contents

[Requirements](#requirements)

[Contributing](#contributing)


## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Discord Application](https://discord.com/developers/applications)


## Contributing

### Setup development environment

#### Discord developer portal

- Head over to [Discord Developer Portal](https://discord.com/developers/applications)
![image](https://user-images.githubusercontent.com/66553902/135720513-624616d8-0687-4fd9-999c-a13d80335c0e.png)


- Click on the button "New Application", give it a name and click create
![image](https://user-images.githubusercontent.com/66553902/135741374-3092ae21-724e-4114-8f20-f43747854850.png)


- Click on the tab labelled "Bot", click on the button "Add Bot"
![image](https://user-images.githubusercontent.com/66553902/135741376-0d6f8946-9205-4059-9299-9c8ad9c48fa6.png)


- Under "Token", click on the button labelled "Copy" to copy the bot token
![image](https://user-images.githubusercontent.com/66553902/135741382-12c4ca70-5a38-409a-9518-dfe40f365d37.png)

- Open file named configexample.js and paste the bot token in the variable "token"
![image](https://user-images.githubusercontent.com/66553902/135721301-d8097ab7-2f10-42ea-8dec-16528a7b6894.png)

- Rename the file "configexample.js" to "config.js"
![image](https://user-images.githubusercontent.com/66553902/135721398-891e1093-015b-4eeb-b05d-3571aca157ac.png)

- Follow the intructions in the file to create a webhook
![image](https://user-images.githubusercontent.com/66553902/135741402-506e2fb9-2c4f-405c-8e55-cb8a831b7aa2.png)
![image](https://user-images.githubusercontent.com/66553902/135722789-305411d1-6c4e-4a77-8038-03799199f3f6.png)

<hr>

#### Adding the bot to your server

- Head over to [Discord Developer Portal](https://discord.com/developers/applications)
![image](https://user-images.githubusercontent.com/66553902/135742228-1f4c9670-0909-4c5a-ac46-a0785e4bd1a1.png)

- Open the application you created earlier
![image](https://user-images.githubusercontent.com/66553902/135721958-85336829-6bf4-4da6-ba14-1acefb30ecb8.png)

- Click on the tab labelled "OAuth2"
![image](https://user-images.githubusercontent.com/66553902/135742140-48336f01-b23a-4dea-8c88-6fb4b6285c85.png)

- Under "Scopes", check the box next to "bot"
![image](https://user-images.githubusercontent.com/66553902/135742145-b2c7902f-d908-443c-b51b-118eb1c3b5c6.png)

- Copy and paste the link that appears in a new tab
- Login again to your discord account if prompted
![image](https://user-images.githubusercontent.com/66553902/135742159-c39b5bac-5088-482a-926d-44588f674086.png)

- Select your server and click "Authorize"
![image](https://user-images.githubusercontent.com/66553902/135742178-973ddc64-eaf4-41a4-adbe-1f68d2eda219.png)
![image](https://user-images.githubusercontent.com/66553902/135742183-eca7d32d-b748-460a-82bc-b4d048f4d983.png)


### Managing code branches

**1.** Clone repository

```
git clone https://github.com/itsksquare/Ksquare-Discord-Bot
```

**2.** Navigate to project folder

```
cd Ksquare-Discord-Bot
```

**3.** Create new branch

```
git checkout -b <insert_branch_name>
```

**4.** Turn on chage tracking and begin coding!

```
git add .
```

**5.** Start debugging

```bash
# run the following command in the terminal to start the bot
node ./src/bot.js
# or
npm start
# or if you have nodemon installed, run:
npm run dev
```

**6.** Commit changes once you are finished

```
git commit -m "Commit message"
```

**7.** Push changes to remote repository

```
git push -u origin <insert_branch_name>
```

**8.** Head to [GitHub](https://github.com/itsksquare/Ksquare-Discord-Bot/pulls) to make pull request
