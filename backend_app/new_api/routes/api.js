var indexRouter   = require('./index');
var usersRouter   = require('./users');
var authRouter    = require('./auth');
var productRouter = require('./product');

const router = require("express").Router();


router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/product', productRouter);


module.exports = router;