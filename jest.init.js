import { config } from '@vue/test-utils'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import "./plugins/vue-carousel";
import "./config/constants";
import './config/aflora.js';
import './config/actualidad.js';
import './config/eventos.js';
import './config/filarmonicaJovenDeColombia.js';
import './config/voluntariadoFundacionBolivarDavivienda.js';
import './config/emprendePais.js';
import './config/inversionSocial.js';
import './config/becasAlTalento.js';
import './config/cultivarte.js';
import { JSDOM } from "jsdom"

const dom = new JSDOM()

global.document = dom.window.document
global.window = dom.window

// install plugins as normal
Vue.use(BootstrapVue)

config.mocks['$constants'] = Vue.prototype.$constants;
config.mocks['$afloraData'] = Vue.prototype.$afloraData;
config.mocks['$actualidadData'] = Vue.prototype.$actualidadData;
config.mocks['$eventosData'] = Vue.prototype.$eventosData;
config.mocks['$filarmonicaJovenDeColombiaData'] = Vue.prototype.$filarmonicaJovenDeColombiaData;
config.mocks['$voluntariadoFundacionBolivarDaviviendaData'] = Vue.prototype.$voluntariadoFundacionBolivarDaviviendaData;
config.mocks['$emprendePaisData'] = Vue.prototype.$emprendePaisData;
config.mocks['$inversionSocialData'] = Vue.prototype.$inversionSocialData;
config.mocks['$becasAlTalentoData'] = Vue.prototype.$becasAlTalentoData;
config.mocks['$cultivarteData'] = Vue.prototype.$cultivarteData;
config.stubs.NuxtLink = { template: '<a><slot /></a>' }
config.stubs['client-only'] = { template: '<div><slot /></div>' };
