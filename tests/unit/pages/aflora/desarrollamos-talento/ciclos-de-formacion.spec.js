import { config, createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import AfloraDesarrollamosTalentoCiclosDeFormacion from '@/pages/aflora/desarrollamos-talento/ciclos-de-formacion.vue'
// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mock = {
    localVue,
    mocks: {}
}

const wrapper = mount(AfloraDesarrollamosTalentoCiclosDeFormacion, mock)

describe('ciclos-de-formacion.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('has correct <head> content', () => {
        expect(wrapper.vm.$metaInfo.title)
            .toBe(config.mocks['$afloraData'].afloraDesarrollamosTalentoCiclosDeFormacion.meta.title +
                ' - ' + config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'title'
        ).content)
            .toBe(config.mocks['$afloraData'].afloraDesarrollamosTalentoCiclosDeFormacion.meta.metaTitle +
                ' - ' + config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'description'
        ).content).toBe(config.mocks['$afloraData'].afloraDesarrollamosTalentoCiclosDeFormacion.meta.metaDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:title'
        ).content)
            .toBe(config.mocks['$afloraData'].afloraDesarrollamosTalentoCiclosDeFormacion.meta.ogTitle +
                ' - ' + config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:description'
        ).content).toBe(config.mocks['$afloraData'].afloraDesarrollamosTalentoCiclosDeFormacion.meta.ogDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:image'
        ).content).toBe(config.mocks['$constants'].baseURL + config.mocks['$afloraData'].afloraDesarrollamosTalentoCiclosDeFormacion.meta.ogImage)
    })
})
