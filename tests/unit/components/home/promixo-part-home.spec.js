import PromixoPartHome from '@/components/home/promixo-part-home.vue'
import { config, mount } from '@vue/test-utils'

const wrapper = mount(PromixoPartHome)
const mockedMethod = jest.fn()
wrapper.vm.$refs.carousel.goToPage = mockedMethod

describe('promixo-part-home.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
    test('Test for goNext()', () => {
        wrapper.find("#go-next").trigger('click');
        wrapper.vm.$refs.carousel.currentPage = 0
        wrapper.vm.goNext();
        wrapper.vm.$refs.carousel.currentPage = config.mocks['$constants'].home.slides.length - 1
        wrapper.vm.goNext();
        expect(mockedMethod).toHaveBeenCalled();
    });
    test('Test for goPrev()', () => {
        wrapper.find("#go-prev").trigger('click');
        wrapper.vm.$refs.carousel.currentPage = 0
        wrapper.vm.goPrev();
        wrapper.vm.$refs.carousel.currentPage = 1
        wrapper.vm.goPrev();
        expect(mockedMethod).toHaveBeenCalled();
    });
})
