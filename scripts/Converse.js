// Description:
//   Simple back and forth conversation with C-3P0
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot quotes - C-3PO conversation
//
// Author:
//   RWA
//


// 
var switchBoard = new Conversation(robot, "user", function(msg) {
    return msg.constructor.name === "TextMessage";
});



robot.hear(/delete all the files/, function(msg) {

    msg.reply('Are you really sure???');

    //Start a dialog with the user that sent this message.
    var dialog = switchBoard.startDialog(msg);

    //Provide choices for the next step, wait for the user.
    dialog.addChoice(/yes/, function(msg2){/*Do some stuff for the yes option*/}
    dialog.addChoice( /no/, function(msg2){/*Do some stuff for the no option*/ }

    //The dialog will expire after 30 seconds.
});



var Conversation = require("hubot-conversation");
module.exports = function(robot) {
    var switchBoard = new Conversation(robot);

    robot.respond(/clean the house/, function(msg) {
        var dialog = switchBoard.startDialog(msg);

        msg.reply("Sure, where should I start? Kitchen or Bathroom");
        dialog.addChoice(/kitchen/i, function(msg2) {
            msg2.reply("On it boss!");
        });
        dialog.addChoice(/bathroom/i, function(msg2) {
            msg.reply("Do I really have to?");
            dialog.addChoice(/yes/, function(msg3) {
                msg3.reply("Fine, Mom!");
            });
        });
    });

    robot.respond(/jump/, function(msg) {
        var dialog = switchBoard.startDialog(msg);
        msg.reply("Sure, How many times?");

        dialog.addChoice(/([0-9]+)/i, function(msg2) {
            var times = parseInt(msg2.match[1], 10);
            for (var i = 0; i < times; i++) {
                msg.emote("Jumps"); //We can use the original message too.
            }
        });
    });

    robot.respond(/.*the mission/, function(msg) {
        msg.reply(
            "You have 5 seconds to accept your mission, or this message will self-destruct"
        );
        var dialog = switchBoard.startDialog(msg, 5000); //5 Second timeout
        dialog.dialogTimeout = function(msg2) {
            msg2.emote("Boom");
        };
        dialog.addChoice(/yes/i, function(msg2) {
            msg2.reply("Great! Here are the details...");
        });
    });
};