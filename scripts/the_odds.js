// Description:
//   Have C-3PO tell me the odds.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot quotes - C-3PO delivers the odds.
//
// Author:
//   RWA
//


// define array of quotes
odds = "The possibility of successfully navigating an asteroid field is approximately 3,720 to 1!"

// make script visible to hubot
module.exports = function(robot) {
  // respond to a request for "tell me the odds"
  robot.respond(/tell me the odds/i, function(msg) {
    msg.send(odds)
  })

}