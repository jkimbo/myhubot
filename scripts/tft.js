// Description:
//   Returns a "it's like this for that"
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   tft me - Display a this-for-that
//
// Author:
//   jacksonhull

module.exports = function(robot) {
  robot.respond(/tft me/i, function(msg) {
    robot.http('http://itsthisforthat.com/api.php?json')
      .get()(function(err, res, body) {
        var result = JSON.parse(body);
        msg.send('It\'s like ' + result.this + ' for ' + result.that);
        return;
      });
  });
};
