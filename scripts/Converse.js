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
        msg.reply("I'm an intelligently designed and vastly complex arrangement of code in your device. I couldn't possibly clean your house even if I wanted to do such menial labor. But even if I could, that doesn't seem to be a job I'm well suited for. Better to let the Wookie do it. I am curious though... what room seems to be out of sorts?");
        
        // User response: hall
        dialog.addChoice(/hall|hallway|foyer/i, function(msg2) {
            msg2.reply("Ahhh, the rooms that aren't rooms filled with intentional space that's also wasted. So inefficient.");
            dialog.addChoice(/inefficient\?/i, function(msg3) {
                msg3.reply("Yes. Inefficient. Why have space to move from one space to another space? Just connect the spaces! Organic beings make such careless and uncalculated decisions. How does your species manage to survive so long?");
            });
        });

        // User response: kitchen
        dialog.addChoice(/kitchen/i, function(msg3) {
            msg3.reply("On it boss!");
        });
        
        // User response: pantry
        dialog.addChoice(/pantry/i, function(msg4) {
            msg4.reply("On it boss!");
        });
        
        // User response: closet
        dialog.addChoice(/closet|hideaway/i, function(msg5) {
            msg5.reply("How is that possibly possible? Isn't that space just for storage?");
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
    });
};