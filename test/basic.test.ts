import Component from '@deuscx/starter-vue-component'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('component.vue', () => {
  it('should render', () => {
    const wrapper = mount(Component, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be interactive', async () => {
    const wrapper = mount(Component, { props: { initial: 0 } })
    expect(wrapper.text()).toContain('0')

    expect(wrapper.find('.inc').exists()).toBe(true)

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})
