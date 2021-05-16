import { config, createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import AfloraNuestrasOrganizaciones from '@/pages/aflora/nuestras-organizaciones.vue'
// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mock = {
    localVue,
    mocks: {}
}

const wrapper = mount(AfloraNuestrasOrganizaciones, mock)

describe('nuestras-organizaciones.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('Test filter with cases', async () => {
        expect(wrapper.vm.title).toBe('Todos');

        wrapper.vm.selectedDept = config.mocks['$afloraData'].afloraNuestrasOrganizaciones.foundations[0].departamento
        wrapper.vm.setDept();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.title).toBe(wrapper.vm.selectedDept);
        wrapper.vm.selectedDepts = [];

        wrapper.vm.selectedLineaD = config.mocks['$afloraData'].afloraNuestrasOrganizaciones.foundations[0].lineaDeGestion
        wrapper.vm.setLineaD();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.title).toBe(wrapper.vm.selectedLineaD);
        wrapper.vm.selectedLineaDeGestion = [];

        wrapper.vm.setDept();
        wrapper.vm.setLineaD();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.title).toBe('Varios');
    })
    test('has correct <head> content', () => {
        expect(wrapper.vm.$metaInfo.title)
            .toBe(config.mocks['$afloraData'].afloraNuestrasOrganizaciones.meta.title +
                ' - ' + config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'title'
        ).content)
            .toBe(config.mocks['$afloraData'].afloraNuestrasOrganizaciones.meta.metaTitle +
                ' - ' + config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'description'
        ).content).toBe(config.mocks['$afloraData'].afloraNuestrasOrganizaciones.meta.metaDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:title'
        ).content)
            .toBe(config.mocks['$afloraData'].afloraNuestrasOrganizaciones.meta.ogTitle +
                ' - ' + config.mocks['$constants'].home.meta.title)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:description'
        ).content).toBe(config.mocks['$afloraData'].afloraNuestrasOrganizaciones.meta.ogDescription)

        expect(wrapper.vm.$metaInfo.meta.find(
            (item) => item.hid === 'og:image'
        ).content).toBe(config.mocks['$constants'].baseURL + config.mocks['$afloraData'].afloraNuestrasOrganizaciones.meta.ogImage)
    })
})
