const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).json('Hello!!!!!');
});




router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});




module.exports = router;
