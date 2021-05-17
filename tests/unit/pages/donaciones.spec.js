import { config, createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import Donaciones from '@/pages/donaciones.vue'
// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mock = {
    localVue,
    mocks: {}
}

const wrapper = mount(Donaciones, mock)

describe('donaciones.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('has correct <head> content', () => {
        expect(wrapper.vm.$metaInfo.title).toBe(config.mocks['$constants'].donaciones.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'title'
        ).content).toBe(config.mocks['$constants'].donaciones.meta.metaTitle)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'description'
        ).content).toBe(config.mocks['$constants'].donaciones.meta.metaDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:title'
        ).content).toBe(config.mocks['$constants'].donaciones.meta.ogTitle)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:description'
        ).content).toBe(config.mocks['$constants'].donaciones.meta.ogDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:image'
        ).content).toBe(config.mocks['$constants'].baseURL + config.mocks['$constants'].donaciones.meta.ogImage)
    })
})
