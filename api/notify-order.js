export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { orderDetails } = req.body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHANNEL_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({ error: 'Telegram env not set' });
    }

    const message = `📦 New Order Received 📦

Order ID: ${orderDetails.id}
Customer: ${orderDetails.customerName}
Phone: ${orderDetails.phone}
Address: ${orderDetails.address}

Items:
${orderDetails.items.map(
  (item) => `- ${item.quantity}x ${item.name} (₹${item.price * item.quantity})`
).join('\n')}

Total: ₹${orderDetails.total}
Payment Method: ${orderDetails.paymentMethod}
Order Time: ${new Date().toLocaleString()}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    );

    const data = await tgRes.json();
    return res.status(200).json({ success: true, data });

  } catch (err) {
    console.error('Telegram error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
