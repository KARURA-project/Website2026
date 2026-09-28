import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import en from '../messages/en.json';

type Messages = { [key: string]: string | Messages };

/** Overlay `override` onto `base`, so any key missing from `override` keeps the base (English) text. */
function withFallback(base: Messages, override: Messages): Messages {
  const out: Messages = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const baseValue = base[key];
    if (baseValue !== undefined && typeof value !== typeof baseValue) continue; // shape mismatch: keep English
    out[key] =
      typeof value === 'object' && typeof baseValue === 'object' ? withFallback(baseValue, value) : value;
  }
  return out;
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  // Only 'ja' and 'en' exist; anything else in the cookie falls back to English.
  const locale = cookieStore.get('locale')?.value === 'ja' ? 'ja' : 'en';

  const messages =
    locale === 'ja' ? withFallback(en, (await import('../messages/jp.json')).default) : en;

  return { locale, messages };
});
