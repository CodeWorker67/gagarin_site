export const ROUTES = {
  HOME: '/',
  PRICING: '/pricing',
  SETUP: '/setup',
  SUPPORT: '/support',
  LOGIN: '/login',
  LOGIN_TELEGRAM_CALLBACK: '/login/telegram-callback',
  LOGIN_BOT: '/auth/bot',
  DASHBOARD: '/dashboard',
  CHECKOUT: '/checkout',
  SUCCESS: '/success',
  PRIVACY_POLICY: '/privacy',
  TERMS: '/terms',
  GIFT: '/gift',
};

export const BRAND_NAME = 'Gagarin VPN';

function telegramHandleFromUrl(url, fallback = '') {
  const match = String(url || '').match(/t\.me\/([^/?#]+)/i);
  return match ? `@${match[1]}` : fallback;
}

const telegramBotUrl =
  import.meta.env.VITE_TELEGRAM_BOT_URL || 'https://t.me/gagarinvpnbot';
const telegramSupportUrl =
  import.meta.env.VITE_TELEGRAM_SUPPORT_URL || 'https://t.me/gagarin_support';
const telegramChannelUrl =
  import.meta.env.VITE_TELEGRAM_CHANNEL_URL || 'https://t.me/gagarin_vpn';

export const TELEGRAM = {
  BOT_URL: telegramBotUrl,
  BOT_NAME: import.meta.env.VITE_TELEGRAM_BOT_NAME || 'gagarinvpnbot',
  SUPPORT_URL: telegramSupportUrl,
  SUPPORT_HANDLE: telegramHandleFromUrl(telegramSupportUrl, '@gagarin_support'),
  CHANNEL_URL: telegramChannelUrl,
};

export const PRO_SUBSCRIPTION_LABEL = 'Gagarin VPN PRO';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export const SUBSCRIPTION_SLOTS = [
  { key: 'pro_5', urlKey: 'pro_5_url', devices: 5, label: 'Gagarin VPN · 5 устройств' },
  { key: 'pro_3', urlKey: 'pro_3_url', devices: 3, label: 'Gagarin VPN · 3 устройства' },
  { key: 'pro_10', urlKey: 'pro_10_url', devices: 10, label: 'Gagarin VPN · 10 устройств' },
];

export const DEVICE_TIERS = [3, 5, 10];

export const TARIFFS = [
  { id: 'm1_d3', label: '1 месяц', price: 199, days: 30, devices: 3, type: 'pro' },
  { id: 'm3_d3', label: '3 месяца (выгода −16%)', price: 499, days: 90, devices: 3, type: 'pro' },
  { id: 'm6_d3', label: '6 месяцев (выгода −16%)', price: 999, days: 180, devices: 3, type: 'pro' },
  { id: 'm12_d3', label: '12 месяцев (выгода −50%)', price: 1188, days: 365, devices: 3, type: 'pro' },

  { id: 'm1_d5', label: '1 месяц', price: 299, days: 30, devices: 5, type: 'pro' },
  { id: 'm3_d5', label: '3 месяца (выгода −16%)', price: 749, days: 90, devices: 5, type: 'pro', popular: true },
  { id: 'm6_d5', label: '6 месяцев (выгода −25%)', price: 1349, days: 180, devices: 5, type: 'pro' },
  { id: 'm12_d5', label: '12 месяцев (выгода −50%)', price: 1799, days: 365, devices: 5, type: 'pro' },

  { id: 'm1_d10', label: '1 месяц', price: 659, days: 30, devices: 10, type: 'pro' },
  { id: 'm3_d10', label: '3 месяца (выгода −32%)', price: 1349, days: 90, devices: 10, type: 'pro' },
  { id: 'm6_d10', label: '6 месяцев (выгода −39%)', price: 2399, days: 180, devices: 10, type: 'pro' },
  { id: 'm12_d10', label: '12 месяцев (выгода −59%)', price: 3239, days: 365, devices: 10, type: 'pro' },
];

export const PREVIEW_TARIFF_SUFFIXES = ['m1', 'm3', 'm12'];

export const MIN_TARIFF_PRICE = 199;

export function getPreviewTariffs(devices) {
  return PREVIEW_TARIFF_SUFFIXES.map((prefix) => {
    const id = `${prefix}_d${devices}`;
    const tariff = TARIFFS.find((t) => t.id === id);
    if (!tariff) return null;
    return prefix === 'm3' ? { ...tariff, popular: true } : tariff;
  }).filter(Boolean);
}

export function getTariffsByDevices(devices) {
  return TARIFFS.filter((t) => t.type === 'pro' && t.devices === devices);
}

export const PAYMENT_METHODS = [
  { id: 'sbp', label: 'СБП', icon: 'Zap' },
  { id: 'card', label: 'Карта РФ', icon: 'CreditCard' },
];

export const FEATURES = [
  {
    icon: 'Shield',
    title: 'VLESS Reality',
    description: 'Технология V2Ray VLESS Reality для приватности и устойчивости соединения.',
  },
  {
    icon: 'Zap',
    title: 'До 10 Гбит/с',
    description: 'Мощный канал, высокая скорость. YouTube, стримы и игры без тормозов.',
  },
  {
    icon: 'Globe',
    title: '4 страны',
    description: 'Надёжные сервера в четырёх странах — выбирай ближайший.',
  },
  {
    icon: 'Smartphone',
    title: 'До 10 устройств',
    description: 'Одна подписка на телефон, ноутбук, планшет и другие устройства.',
  },
  {
    icon: 'Infinity',
    title: 'Без лимитов',
    description: 'Без ограничений по трафику и скорости.',
  },
  {
    icon: 'Clock',
    title: '24/7 поддержка',
    description: 'Telegram-бот и живая поддержка. Ответим быстро.',
  },
];
