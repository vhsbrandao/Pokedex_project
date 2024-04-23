import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/locales/en';
import pt from '@/locales/pt';
import es from '@/locales/es';

Vue.use(VueI18n);

const messages = {
  en,
  pt,
  es,
};

const i18n = new VueI18n({
  locale: 'en', // Idioma padrão
  messages,
});

export default i18n;
