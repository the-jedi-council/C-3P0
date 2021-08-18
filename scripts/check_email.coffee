# Description:
#   Make strongbad check his email
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   Hubot check email - StrongBad will share one of his various email intros
#
# Notes:
#   No lint found using http://www.coffeelint.org
#
# Author:
#   Bob Argenbright
#
# define array of links to each of the character video URLs
emails = [
    "Oh, who is the guy that checks all his emails? That's me, Strong Bad.",
    "I'm gonna check my email all of the time, doo doo doo...",
    "Checkin' my email, checkin' my email, checkin'-checkin'-checkin'-checkin' my email.",
    "Checkin' emails is like the best thing I do.",
    "I check, you check, we all check for e... mail check... an email...",
    "I'm totally checking my email. Total, man.",
    "Email, grumble grumble, email, grumble...",
    "Initiate email check in 5, 4, 3, 2, 1.",
    "Email, dud-duh-doo-duh-dud-duh, dud-duh-doo-duh-dud-duh...",
    "Ohh! Electronic mail!",
    "Something has compelled me to check my email.",
    "Ow-mnow, mnow, mnow... Ow-mnow, mnow, mnow...",
    "_singing the background music of the first level of Donkey Kong_ Do, du, dadada do, du, dadada do...",
    "Here I go once again with the email! Every week I hope that it's from a female! Oh man! Not from a female.",
    "Strong Bad Emails are a part of this balanced breakfast.",
    "Toons! Games! I'm gonna check my eeeemail....",
    "Ahh...so many emails, so little good emails.",
    "What do you get when you email Strong Bad? You get a world of hurt.",
    "I'm intrigued by these... how you say... emails.",
    "Email: It's like the sugar on the candy for my stuff.",
]
# make script visible to hubot
module.exports = (robot) ->
  # listen event for keyword "check email"
  robot.respond /check email/i, (msg) ->
    # return msg, in this case a randomly picked URL
    msg.send msg.random emails

  robot.hear /(strongbad|mail)/i, (msg) ->
    msg.send msg.random emails
