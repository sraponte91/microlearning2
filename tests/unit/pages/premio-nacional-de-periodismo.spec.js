import { config, createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import PremioNacionalDePeriodismo from '@/pages/premio-nacional-de-periodismo.vue'
// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mock = {
    localVue,
    mocks: {}
}

const wrapper = mount(PremioNacionalDePeriodismo, mock)

describe('premio-nacional-de-periodismo.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('has correct <head> content', () => {
        expect(wrapper.vm.$metaInfo.title).toBe(config.mocks['$constants'].premioNacionalDePeriodismo.meta.title + ' - ' +
            config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'title'
        ).content).toBe(config.mocks['$constants'].premioNacionalDePeriodismo.meta.metaTitle + ' - ' +
            config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'description'
        ).content).toBe(config.mocks['$constants'].premioNacionalDePeriodismo.meta.metaDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:title'
        ).content).toBe(config.mocks['$constants'].premioNacionalDePeriodismo.meta.ogTitle + ' - ' +
            config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:description'
        ).content).toBe(config.mocks['$constants'].premioNacionalDePeriodismo.meta.ogDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:image'
        ).content).toBe(config.mocks['$constants'].baseURL + config.mocks['$constants'].premioNacionalDePeriodismo.meta.ogImage)
    })
})
