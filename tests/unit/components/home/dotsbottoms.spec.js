import { mount } from '@vue/test-utils'
import dotsbottoms from '@/components/home/dotsbottoms.vue'

const wrapper = mount(dotsbottoms)


describe('dotsbottoms.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
})
