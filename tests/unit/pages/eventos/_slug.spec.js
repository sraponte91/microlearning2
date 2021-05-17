import { config, createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import EventosSlug from '@/pages/eventos/_slug.vue'
// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mock = {
    localVue,
    mocks: {
        $route: {
            params: {
                slug: config.mocks['$eventosData'].eventos.events[0].slug
            }
        }
    }
}

const wrapper = mount(EventosSlug, mock)

describe('_slug.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('has correct <head> content', () => {
        expect(wrapper.vm.$metaInfo.title).toBe(wrapper.vm.evt.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'title'
        ).content).toBe(wrapper.vm.evt.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'description'
        ).content).toBe(wrapper.vm.evt.shortDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:title'
        ).content).toBe(wrapper.vm.evt.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:description'
        ).content).toBe(wrapper.vm.evt.shortDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:image'
        ).content).toBe(config.mocks['$constants'].baseURL + wrapper.vm.evt.imgURL)
    })

    test('Is event today?', () => {
        wrapper.vm.isToday("9/Feb/2021")
        wrapper.vm.isToday(new Date().toLocaleString())
    })
})
