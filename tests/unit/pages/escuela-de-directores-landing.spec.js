import { config, createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import EscuelaDeDirectoresLanding from '@/pages/escuela-de-directores-landing.vue'
// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mock = {
    localVue,
    mocks: {}
}

const wrapper = mount(EscuelaDeDirectoresLanding, mock)

describe('escuela-de-directores-landing.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('has correct <head> content', () => {
        expect(wrapper.vm.$metaInfo.title).toBe(config.mocks['$constants'].escuelaDeDirectoresLanding.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'title'
        ).content).toBe(config.mocks['$constants'].escuelaDeDirectoresLanding.meta.metaTitle)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'description'
        ).content).toBe(config.mocks['$constants'].escuelaDeDirectoresLanding.meta.metaDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:title'
        ).content).toBe(config.mocks['$constants'].escuelaDeDirectoresLanding.meta.ogTitle)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:description'
        ).content).toBe(config.mocks['$constants'].escuelaDeDirectoresLanding.meta.ogDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:image'
        ).content).toBe(config.mocks['$constants'].baseURL + config.mocks['$constants'].escuelaDeDirectoresLanding.meta.ogImage)
    })
})
