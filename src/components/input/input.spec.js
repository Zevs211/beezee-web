import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from './Index.vue'

describe('input', () => {
  it('should render', () => {
    const wrapper = mount(Component)
    const input = wrapper.find('input')

    expect(input.exists()).toBeTruthy()
    expect(input.isVisible()).toBeTruthy()
  })
  it('placeholder is shown', () => {
    const placeholder = 'Some test placeholder'
    const wrapper = mount(Component, {
      props: { placeholder: placeholder }
    })
    const input = wrapper.find('input')

    expect(input.element.placeholder).toBe(placeholder)
  })
  it('value can be set', async () => {
    const wrapper = mount(Component)
    const input = wrapper.find('input')

    expect(input.element.value).toBe('')
    const newValue = 'Some test VALUE'
    await input.setValue(newValue)
    expect(input.element.value).toBe(newValue)
  })
  it.todo('value can be masked')
  it.todo('icon is shown if passed')
  it.todo('can validate rules')
  it.todo('can debounce event sending')
  it.todo('shows autocomplete suggestions')
})
