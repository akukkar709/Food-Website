const express = require('express');
const router = express.Router();
const { sendOrderNotification } = require('../controllers/telegramController');

router.post('/notify-order', sendOrderNotification);

module.exports = router;


