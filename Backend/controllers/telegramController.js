const axios = require('axios');

const formatOrderMessage = (orderDetails) => {
  return `📦 *New Order Received* 📦

*Order ID*: ${orderDetails.id}
*Customer*: ${orderDetails.customerName}
*Phone*: ${orderDetails.phone}
*Address*: ${orderDetails.address}

*Items:*
${orderDetails.items.map(item => 
  `- ${item.quantity}x ${item.name} (₹${item.price * item.quantity})`
).join('\n')}

*Total*: ₹${orderDetails.total}
*Payment Method*: ${orderDetails.paymentMethod}

*Order Time*: ${new Date().toLocaleString()}`;
};

exports.sendOrderNotification = async (req, res) => {
  const { orderDetails } = req.body;
  
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHANNEL_ID,
        text: formatOrderMessage(orderDetails),
        parse_mode: 'Markdown',
      }
    );
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Telegram API error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send notification',
      details: error.message 
    });
  }
};


