var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.GREETER_SLACK_BOT_TOKEN,
  retry: 20
}).startRTM()

// var reply = 'our current active projects include those in Ruby/Rails (#localsupport, #metplus #redeemify #shf-project #osra) node (#agile-bot #async_voter ) and clojure (#dda-pallet) and there are discussions of new projects starting up in #new_projects';

// controller.hears(['what projects would be good to join?'], ['direct_message','direct_mention'], function(bot, message){
//   bot.reply(message, reply);
// });

var greet = "Welcome and great to have you with us! Please do introduce yourself in #new_members (if you haven't already), and if you have any general technical thoughts/issues/questions please ask in <#C02AA0ARR|techtalk> - <#C0285CSUH|random> is for everything else :slightly_smiling_face:"

greet += "\n\n\nbtw, are you interested in React, Elixir or RSpec?  We're offering a free Premium mob programming session to anyone who likes us on facebook.com/agileventures or follows us on twitter.com/agileventures ..."

controller.on('team_join', function(bot, message){
  console.log(message)
  bot.say({channel: message.user.id, text: greet});
});

// controller.on('user_channel_join', function(bot, message){
//   bot.reply(message, 'Welcome aboard! Let us know if you need any help getting set up');
// });

 // bot.say({channel: 'U3C88DQ4Q', text: greet})