import { mount } from '@vue/test-utils'
import dotsrightsct from '@/components/home/dotsrightsct.vue'

const wrapper = mount(dotsrightsct)


describe('dotsrightsct.vue', () => {
    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('Renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
})
