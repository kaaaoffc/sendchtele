import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.BOT_TOKEN;
const channelUsername = '@k_store_hosting_offc';

if (!token) {
  console.error('BOT_TOKEN tidak ditemukan di file .env');
  process.exit(1);
}

// Inisialisasi bot tanpa polling karena hanya untuk mengirim pesan
const bot = new TelegramBot(token, { polling: false });

// Pesan dengan format blockquote
const message = `
<blockquote>
🚀 KAAAOFFC OPEN PT VVIP 🚀

━━━━━━━━━━━━━━━━━━━
🎁 BENEFIT RESELLER
━━━━━━━━━━━━━━━━━━━
• Reseller SC Bug Toxic Shadow
• Admin Panel Legal
• Reseller SC Auto JPM SW & GC (via WhatsApp)
• Reseller UBOT
• Reseller VPS

━━━━━━━━━━━━━━━━━━━
💻 BENEFIT SC (FULL UPDATE)
━━━━━━━━━━━━━━━━━━━
• SC Bug Toxic Shadow
• SC Auto Order
• SC Auto Order Gift
• SC Auto Order Noktel
• SC Upload Otomatis ke GitHub
• SC MD via Telegram
• SC Deface Panel
• SC Hack VPS
• Reseller SC Auto JPM SW & GC via WhatsApp
• SC Auto Order Nokos

━━━━━━━━━━━━━━━━━━━
🎓 BENEFIT MURID
━━━━━━━━━━━━━━━━━━━
• Create Tag Scam
• Create Tag Fake
• Band Akun
• Band Channel
• Band Grup
• Hack VPS
• Deface Panel
• UBOT
• Telegram Premium Murah

━━━━━━━━━━━━━━━━━━━
💰 PRICE
━━━━━━━━━━━━━━━━━━━
• Normal : Rp25.000
• Promo  : Rp10.000 -7

BENEFIT KURANG BANYAK?
TENANG AJA TIAP HARI NAMBAH!
━━━━━━━━━━━━━━━━━━━
📞 CONTACT
━━━━━━━━━━━━━━━━━━━
• Chat  : @kaaaoffc311
• Limit : @kaaahostlimitbot
• WhatsApp : wa.me/6285137572401
</blockquote>
`;

// Tombol inline
const keyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: '📞 TELEGRAM',
          url: 'https://t.me/kaaaoffc311'
        },
        {
          text: '🛒 AUTO ORDER',
          url: 'https://t.me/autoorderkaabot'
        }
      ],
      [
        {
          text: '🤖 CHAT BOT',
          url: 'https://t.me/kaaahostlimitbot'
        }
      ]
    ]
  }
};

// Fungsi untuk mengirim pesan
async function sendMessage() {
  try {
    await bot.sendMessage(channelUsername, message, {
      parse_mode: 'HTML',
      ...keyboard
    });
    console.log('Pesan berhasil dikirim ke channel!');
  } catch (error) {
    console.error('Gagal mengirim pesan:', error.message);
  }
}

// Kirim pesan saat bot dijalankan
sendMessage();
