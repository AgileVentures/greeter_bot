var Botkit = require('botkit');
var greet = require('./greeting')

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

controller.on('team_join', function(bot, message){
  console.log(message)
  // greet = greet.replace('USER_NAME', message.user); // got [object Object] for some reason
  bot.say({channel: message.user.id, text: greet});
});

// controller.on('user_channel_join', function(bot, message){
//   bot.reply(message, 'Welcome aboard! Let us know if you need any help getting set up');
// });

 // bot.say({channel: 'U3C88DQ4Q', text: greet})