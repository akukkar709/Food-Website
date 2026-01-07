// export const sendTelegramMessage = async (orderDetails) => {
//   // Try backend endpoint first
//   try {
//     const response = await fetch('/api/notify-order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ orderDetails }),
//     });
//     return await response.json();
//   } catch (error) {
//     console.error('Backend notification failed, falling back to direct API:', error);
    
//     // Fallback to direct Telegram API
//     const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

//     const CHAT_ID = process.env.TELEGRAM_CHANNEL_ID;
    
//     const message = `📦 *New Order Received* 📦
    
// *Order ID*: ${orderDetails.id}
// *Customer*: ${orderDetails.customerName}
// *Phone*: ${orderDetails.phone}
// *Address*: ${orderDetails.address}

// *Items:*
// ${orderDetails.items.map(item => 
//   `- ${item.quantity}x ${item.name} (₹${item.price * item.quantity})`
// ).join('\n')}

// *Total*: ₹${orderDetails.total}
// *Payment Method*: ${orderDetails.paymentMethod}

// *Order Time*: ${new Date().toLocaleString()}`;

//     try {
//       const response = await fetch(
//         `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             chat_id: CHAT_ID,
//             text: message,
//             parse_mode: 'Markdown',
//           }),
//         }
//       );
//       return await response.json();
//     } catch (fallbackError) {
//       console.error('Direct Telegram API also failed:', fallbackError);
//       throw new Error('Failed to send notification through both backend and direct API');
//     }
//   }
// };



export const sendTelegramMessage = async (orderDetails) => {
  const res = await fetch('/api/notify-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderDetails }),
  });

  if (!res.ok) {
    throw new Error('Failed to notify backend');
  }

  return await res.json();
};
