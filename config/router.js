const router = require('express').Router();
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
//------------------------------------------------------------------------------
router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .delete(users.delete)
  .put(users.update);

router.route('/register')
  .post(auth.register);

router.post('/spotify', oauth.spotify);

module.exports = router;
