import { config, createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import LaFundacion from '@/pages/la-fundacion.vue'
// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mock = {
    localVue,
    mocks: {
        $route: {
            path: '/some/path'
        }
    }
}

const wrapper = mount(LaFundacion, mock)

describe('la-fundacion.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('has correct <head> content', () => {
        expect(wrapper.vm.$metaInfo.title).toBe(config.mocks['$constants'].laFundacion.meta.title + ' - ' +
            config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'title'
        ).content).toBe(config.mocks['$constants'].laFundacion.meta.metaTitle + ' - ' +
            config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'description'
        ).content).toBe(config.mocks['$constants'].laFundacion.meta.metaDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:title'
        ).content).toBe(config.mocks['$constants'].laFundacion.meta.ogTitle + ' - ' +
            config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:description'
        ).content).toBe(config.mocks['$constants'].laFundacion.meta.ogDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:image'
        ).content).toBe(config.mocks['$constants'].baseURL + config.mocks['$constants'].laFundacion.meta.ogImage)
    })
})
