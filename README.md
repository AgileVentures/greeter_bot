# Greeter Bot

Greeter Bot greets folks joining our Slack Instance

Note that the GREETER_SLACK_BOT_TOKEN needs to be set in your environment for the bot to connect to a Slack instance.  See https://api.slack.com/bot-users for more details.  Once you have a bot token you can ensure the bot has access to it like so:

```
$ GREETER_SLACK_BOT_TOKEN=<YOUR_TOKEN> node server.js
```

### C9 install

```
$ git clone https://github.com/AgileVentures/greeter_bot
$ cd greeter_bot
$ npm install
$ node server.js
```

### Dokku install

The production bots are now installed via dokku on Azure:

```
→ git remote -v
azure-production	dokku@agileventures.eastus.cloudapp.azure.com:greeterbot-production (fetch)
azure-production	dokku@agileventures.eastus.cloudapp.azure.com:greeterbot-production (push)
origin	git@github.com:tansaku/greeter_bot.git (fetch)
origin	git@github.com:tansaku/greeter_bot.git (push)

→ git push azure-production master
Counting objects: 4, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
....
-----> Shutting down old containers in 60 seconds
=====> fc005e593ed37166e80f04c0b0093f367771bff7aa055e4bc2900fa8a9a2850b
=====> Application deployed:
       http://greeterbot-production.agileventures.eastus.cloudapp.azure.com

To agileventures.eastus.cloudapp.azure.com:greeterbot-production
   f7db8d3..53ef0fc  master -> master
   
```

### AWS Install

Here's how I previously installed the bot to run on an AWS instance:

```
    1  sudo apt-get install git
    2  git clone https://github.com/AgileVentures/greeter_bot
    3  cd greeter_bot/
    4  sudo apt-get install nodejs
    5  apt-get update
    6  sudo apt-get update
    7  sudo apt-get install npm
    8  sudo apt-get install nodejs
    9  npm install
   10  nano ../.bashrc
   11  source ../.bashrc
   12  env | grep BOT
   13  tmux
```

then in tmux window

```
   1  nodejs server.js &
```
   
To leave the tmux window type:

```
ctrl-b d
```

To rejoin the tmux window use:

```
tmux attach
```
