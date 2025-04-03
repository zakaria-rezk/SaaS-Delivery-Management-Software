import { createI18n } from "vue-i18n";
import type { I18nOptions } from "vue-i18n";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
import tr from "@/locales/tr.json";
const messages: any = {
  tr,
  ar,
  en,
};

const options: I18nOptions = {
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("locale") || "en",
  fallbackLocale: "en",
  messages,
};

const i18n = createI18n(options);

export default i18n;
