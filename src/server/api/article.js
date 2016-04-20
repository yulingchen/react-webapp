import { Router } from 'express';
const router = new Router();

// Remove this
import fakeDB from '../fakeDB.js';

router.get('/:aid', (req, res) => {
  const index = fakeDB.findIndex(el => el.aid === req.params.aid);
  if (index < 0) {
    res.statusCode = 500;
    res.json({
      error: 'Post does not exist in db',
    });
  }

  setTimeout(() => {
    res.statusCode = 200;
    res.json(fakeDB[index]);
  }, 300);
});

module.exports = router;
