import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

const mock = {
  mocks: {
    $route: {
      path: '/some/path'
    }
  }
}

describe('Header.vue', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Header, mock)
    expect(wrapper.vm).toBeTruthy()
  })
  test('Renders correctly', () => {
    const wrapper = mount(Header, mock)
    expect(wrapper.element).toMatchSnapshot();
  });
  test('Open mobile menu triggers openMobileMenu()', () => {
    document.body.innerHTML = '<div id="navbarSupportedContent"></div>';
    const wrapper = mount(Header, mock)
    wrapper.find("#open-mobile-menu").trigger('click');
    wrapper.vm.openMobileMenu()
    expect(document.body.classList.contains("overflow-hidden")).toBe(true);
    expect(
      document.getElementById('navbarSupportedContent')
        .classList
        .contains("menu-close-after-cl")
    ).toBe(false);
    expect(document.getElementById('navbarSupportedContent').classList.contains("show")).toBe(true);
  });
  test('Close mobile menu triggers closeMobileMenu()', () => {
    const wrapper = mount(Header, mock)
    wrapper.find("#close-mobile-menu").trigger('click');
    wrapper.vm.closeMobileMenu()
    expect(document.body.classList.contains("overflow-hidden")).toBe(false);
    expect(
      document.getElementById('navbarSupportedContent')
        .classList
        .contains("menu-close-after-cl")
    ).toBe(true);
    expect(document.getElementById('navbarSupportedContent').classList.contains("show")).toBe(false);
  });
})
