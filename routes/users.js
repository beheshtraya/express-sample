var express = require('express');
var router = express.Router();


let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(Object.values(users));
});

router.get('/:userId', (req, res) => {
  console.log(users[req.params.userId])
  return res.send(users[req.params.userId]);
});


module.exports = router;
