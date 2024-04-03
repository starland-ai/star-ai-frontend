import { createI18n } from 'vue-i18n'
import en from './en'
import settings from '@/settings'
const messages = { en }
const localeData = {
  globalInjection: true,
  legacy: false, 
  locale: settings.defaultLanguage,
  messages 
}

export const i18n = createI18n(localeData)
export const setupI18n = {
  install(app) {
    app.use(i18n)
  }
}
