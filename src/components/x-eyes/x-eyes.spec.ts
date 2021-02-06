/* eslint-disable @typescript-eslint/no-unused-vars */

import { newSpecPage } from '@stencil/core/testing'
import { XEyesElement } from './x-eyes'

class ValidationError extends Error {}

describe('x-eyes', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [XEyesElement],
      html: '<x-eyes></x-eyes>',
    })
    expect(root).toEqualHtml(`
      <x-eyes delay="0" distance="0" position="center" radius="natural">
        <mock:shadow-root>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
        </mock:shadow-root>
      </x-eyes>
    `)
  })

  it('renders with attribute values', async () => {
    const { root } = await newSpecPage({
      components: [XEyesElement],
      html: `<x-eyes delay="200" reset></x-eyes>`,
    })
    expect(root).toEqualHtml(`
      <x-eyes delay="200" distance="0" position="center" radius="natural" reset="">
        <mock:shadow-root>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
        </mock:shadow-root>
      </x-eyes>
    `)
  })

  it('re-renders with new property values', async () => {
    const page = await newSpecPage({
      components: [XEyesElement],
      html: `<x-eyes></x-eyes>`,
    })
    const { root } = page
    root.delay = '200'
    root.distance = 10
    root.position = 'bottom'
    root.radius = 'circular'
    root.reset = true
    await page.waitForChanges();
    expect(root).toEqualHtml(`
      <x-eyes delay="200" distance="10" position="bottom" radius="circular" reset="">
        <mock:shadow-root>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
        </mock:shadow-root>
      </x-eyes>
    `)
  })

  it('re-renders with new attribute values', async () => {
    const page = await newSpecPage({
      components: [XEyesElement],
      html: `<x-eyes></x-eyes>`,
    })
    const { root } = page
    expect(root.setAttribute('delay', '200'))
    expect(root.setAttribute('distance', '10'))
    expect(root.setAttribute('position', 'bottom'))
    expect(root.setAttribute('radius', 'circular'))
    expect(root.setAttribute('reset', ''))
    await page.waitForChanges();
    expect(root).toEqualHtml(`
      <x-eyes delay="200" distance="10" position="bottom" radius="circular" reset="">
        <mock:shadow-root>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
          <div class="eye">
            <div class="iris" style="left: NaNpx; top: NaNpx;"></div>
          </div>
        </mock:shadow-root>
      </x-eyes>
    `)
  })

  it('validates new property values', async () => {
    const page = await newSpecPage({
      components: [XEyesElement],
      html: `<x-eyes></x-eyes>`,
    })
    const { root } = page
    await testProperty('delay', -200, 0)
    await testProperty('distance', -10, 0)
    await testProperty('position', 'invalid', 'center')
    await testProperty('radius', 'invalid', 'neutral')
    await testProperty('reset', 1, false)

    async function testProperty(name, invalid, valid) {
      try {
        root[name] = invalid
        await page.waitForChanges();
        throw new ValidationError(`invalid ${name} accepted`)
      } catch (error) {
        if (error instanceof ValidationError) throw error
        // expect(root[name]).toBe(valid)
      }
    }
  })

  it('validates new attribute values', async () => {
    const page = await newSpecPage({
      components: [XEyesElement],
      html: `<x-eyes></x-eyes>`,
    })
    const { root } = page
    await testAttribute('delay', '-200', '0')
    await testAttribute('distance', '-10', '0')
    await testAttribute('position', 'invalid', 'center')
    await testAttribute('radius', 'invalid', 'neutral')
    await testAttribute('reset', '1', '')

    async function testAttribute(name, invalid, valid) {
      try {
        root.setAttribute(name, invalid)
        await page.waitForChanges();
        throw new ValidationError(`invalid ${name} accepted`)
      } catch (error) {
        if (error instanceof ValidationError) throw error
        // expect(root.getAttribute(name)).toEqual(valid)
      }
    }
  })

  it('suppresses movements when detached from DOM', async () => {
    const page = await newSpecPage({
      components: [XEyesElement],
      html: `<x-eyes></x-eyes>`,
    })
    const { body, root } = page
    body.removeChild(root)
    await page.waitForChanges();
    body.appendChild(root)
    await page.waitForChanges();
  })

  it('resets the eye pupil position to the initial value', async () => {
    const page = await newSpecPage({
      components: [XEyesElement],
      html: `<x-eyes></x-eyes>`,
    })
    const { root } = page
    root.resetPosition(root)
    await page.waitForChanges();
  })
})
