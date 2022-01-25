var indexRouter   = require('./index');
var usersRouter   = require('./users');
var authRouter    = require('./auth');
var productRouter = require('./product');
var categoryRouter= require('./category');

const router = require("express").Router();


router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/', authRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);


module.exports = router;