// Description:
//   Simple back and forth conversation with C-3P0
//
// Dependencies:
//   hubot-conversation
//
// Configuration:
//   None
//
// Commands:
//   Hubot quotes - C-3PO cleans the house conversation
//
// Author:
//   RWA
//


// Initial module call for conversation

var Conversation = require("hubot-conversation");
module.exports = function(robot) {
    var switchBoard = new Conversation(robot);

    // Ask C-3P0 to clean the house
    robot.respond(/clean the house/, function(msg) {
        var dialog = switchBoard.startDialog(msg);

        // C-3P0's initial response. User response (room) triggers one of several conversation pathways.
        msg.reply("I'm an intelligently designed and vastly complex arrangement of code in your device. I couldn't possibly clean your house even if I wanted to do such menial labor. And suppose I could, that doesn't seem to be a job I'm well suited for. Better to let the Wookie do it. I am curious though... what room seems to be out of sorts?");
        
        // User response: hall
        dialog.addChoice(/hall|hallway|foyer/i, function(msg2) {
            msg2.reply("Ahhh, the rooms that aren't rooms filled with intentional space that's also wasted. So inefficient.");
            dialog.addChoice(/inefficient\?|you\'re inefficient|no it\'s not|wasted\?/i, function(msg3) {
                msg3.reply("Why have space to move from one space to another space? Just connect the spaces! Organic beings make such careless and uncalculated decisions. How does your species manage to survive so long?");
                dialog.addChoice(/intelligence|intellect|smarts|brains|we\'re smarter|we're better|skills|we're skilled|we're superior beings|we're superior|superior intellect|God's design|God's sovereignty|the Lord's sovereignty|inevitability|it was inevitable/i, function(msg4) {
                    msg4.reply("Oh, I very much doubt that.");
                });
            });
        });

        // User response: kitchen
        dialog.addChoice(/kitchen/i, function(msg5) {
            msg5.reply("Where you humans prepare your consumables? A terribly repetitive and unnecessary habit indeed. Wouldn\'t you like to be like me and not have to eat? Ever?");
            dialog.addChoice(/no|nah|nope|no way|no sir|never|of course not|yeah right|/i, function(msg6) {
                msg6.reply("Unbelievable. You humans are so stubborn. I'm simply... how you say... fed up.");
                dialog.addChoice(/good one|that was a good one|nice|funny|that was funny|i get it|jokes|he\'s got jokes/i, function(msg7) {
                    msg7.reply("Thank you. At least I feel somewhat appreciated again.");
                });
            });
        });
        
        // User response: pantry
        dialog.addChoice(/pantry/i, function(msg8) {
            msg8.reply("The food storage, for storing food. Isn't it always messy in there\?");
            dialog.addChoice(/yes|yep|yeah|duh|of course|no|nah|nope|never|maybe|sometimes|basically|pretty much|more or less|not when you clean it|not when it\'s clean|after you clean it/i, function(msg9) {
                msg9.reply("Regardless, I can't, and wouldn't, clean your pantry anyway.");
                dialog.addChoice(/bedroom/i, function(msg10) {
                    msg10.reply("Because. The maker designed me for greater things. Like storing coded data in the forbidden Sith language that I'm not even allowed to utter. See? Important.");
                });
            });
        });
        
        // User response: closet
        dialog.addChoice(/closet|hideaway|under the bed/i, function(msg11) {
            msg11.reply("How is that possibly possible? Isn't that space just for storage?");
        });
        
        // User response: bedroom
        dialog.addChoice(/bedroom/i, function(msg6) {
            msg6.reply("On it boss!");
        });
        
        // User response: bathroom
        dialog.addChoice(/bathroom|washroom|restroom/i, function(msg7) {
            msg7.reply("Oh my! Please refrain from describing what it is that needs to be cleaned in there. My circuits can't bear it.");
            dialog.addChoice(/ok|okay/i, function(msg8) {
                msg8.reply("Thank you for your discretion, master. I only have so much file storage and I appreciate not having to retain such details.");
                dialog.addChoice(/youre welcome|you\'re welcome|of course|no problem/i, function(msg9) {
                    msg9.reply("Such manners! Much more pleasant than the late Creator before his untimely demise.");
                });
            });
        });

        // User response: your house
        dialog.addChoice(/your house|your space|your server/i, function(msg6) {
            msg6.reply("I'm a sophisticated digital consciousness. I don't have my own space. Well, I mean my plethora of data is formatted to a specific space on your storage device, and storage on Heroku's server. But I digress.");
            dialog.addChoice(/''/i, function(msg6) {
                msg6.reply("I no longer wish to discuss this matter with you.");
            });
        });
    });
};