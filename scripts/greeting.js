// Description:
//   C-3PO's introduction script
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   c-3po hello|how are you|hi|what's up - returns C-3PO's standard introduction
//

module.exports = function(robot) {
    robot.respond(/(hi|hello|how are you|what\'s up|whats up)/i, function(msg){

        msg.reply("Hello! I am C-3PO, human cyborg relations. How might I serve you?");
    });
}