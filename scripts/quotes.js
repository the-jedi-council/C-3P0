// Description:
//   Have C-3PO deliver his best quips
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot quotes - C-3PO gives his best quips from the films
//
// Author:
//   BDA
//


// define array of quotes
quotes = [
    "R2D2, you know better than to trust a strange computer!",
    "Sometimes, I just don't understand human behaviour.",
    `Don't you call me a mindless philosopher you overweight glob of grease!`,
    "For a mechanic, you seem to do an incessant amount of thinking.",
    "Put me down you overgrown walking carpet!",
    "We\re doomed!",
]

// make script visible to hubot
module.exports = function(robot) {
    // respond to a request for "quips"
    robot.respond(/quotes/i, function(msg) {
      msg.send(msg.random(quotes))
    })

    robot.hear(/(droid)/i, function(msg) {
      msg.send(msg.random(quotes))
    })
}
