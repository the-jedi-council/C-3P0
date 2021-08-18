# Description:
#   Discover the time wasting world of Homestar Runner
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   Hubot homestar - Get a delightful dose of Homestar Runner
#
# Notes:
#   No lint found using http://www.coffeelint.org
#
# Author:
#   Bob Argenbright
#
# define array of links to each of the character video URLs
homestar = [
    'http://hrwiki.org/w/images/archive/7/71/20110108231000!Buttdance.gif',
    'https://68.media.tumblr.com/tumblr_m8og99uLAl1qfzkwwo1_400.gif',
    'https://m.popkey.co/c8cc5b/87ZGJ.gif',
    'http://i2.kym-cdn.com/photos/images/original/000/638/817/a51.gif',
    'http://orig09.deviantart.net/de88/f/2008/277/e/8/strong_bad___payback_by_whoismarcus.gif',
    'https://68.media.tumblr.com/f78b179a6933a62beab68903da8bdcae/tumblr_nbjcsxi5Hz1tk10l3o1_400.gif',
    'https://media.giphy.com/media/h6GTAwPQiYuVW/giphy.gif',
]
# make script visible to hubot
module.exports = (robot) ->
  # listen event for keyword "homestar"
  robot.respond /homestar/i, (msg) ->
    # return msg, in this case a randomly picked URL
    msg.send msg.random homestar
