# Greeter Bot

Greeter Bot greets folks joining our Slack Instance

Here's how I installed the bot to run on an AWS instance:

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
   
