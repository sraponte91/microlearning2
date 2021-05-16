import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

const wrapper = mount(Footer, {
  mocks: {
    $route: {}
  }
})

const spyScroll = jest.fn();

describe('Footer.vue', () => {
  beforeEach(() => {
    Object.defineProperty(global.window, 'scroll', { value: spyScroll });
    spyScroll.mockClear();
  });
  test('Is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('Renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  test('Scroll to top', () => {
    wrapper.find("#scroll").trigger('click');
    wrapper.vm.scrollToTop()
    expect(spyScroll).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  })
})
