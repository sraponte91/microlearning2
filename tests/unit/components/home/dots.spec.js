import { mount } from '@vue/test-utils'
import dots from '@/components/home/dots.vue'

const wrapper = mount(dots)


describe('dots.vue', () => {
  test('Is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('Renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
})
