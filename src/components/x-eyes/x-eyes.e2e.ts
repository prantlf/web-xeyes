/* eslint-disable @typescript-eslint/no-explicit-any */

import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing'

describe('x-eyes', () => {
  it('renders', async () => {
    const { component } = await insertComponent()
    expect(component).toHaveClass('hydrated')
  })

  it('reflects changes to the properties in the attributes', async () => {
    const { page, component } = await insertComponent()
    component.setProperty('delay', 200)
    component.setProperty('distance', 10)
    component.setProperty('position', 'bottom')
    component.setProperty('radius', 'circular')
    await page.waitForChanges()
    expect(await component.getProperty('delay')).toEqual(200)
    expect(await component.getProperty('distance')).toEqual(10)
    expect(await component.getProperty('position')).toEqual('bottom')
    expect(await component.getProperty('radius')).toEqual('circular')
    expect(component.getAttribute('delay')).toEqual('200')
    expect(component.getAttribute('distance')).toEqual('10')
    expect(component.getAttribute('position')).toEqual('bottom')
    expect(component.getAttribute('radius')).toEqual('circular')
  })

  it('validates changes to the properties', async () => {
    const { page, component } = await insertComponent()
    const errors = collectErrors(page)
    component.setAttribute('delay', '-200')
    component.setAttribute('distance', '-10')
    component.setAttribute('position', '-10')
    component.setAttribute('radius', 'invalid')
    await page.waitForChanges()
    expect(errors()).toEqual(4)
  })

  it('supports starting and stopping the movements', async () => {
    const { page, component } = await insertComponent()
    await component.callMethod('stopFollowing')
    await component.callMethod('startFollowing')
    await page.waitForChanges()
  })

  it('suppresses movements when detached from DOM', async () => {
    const { page } = await insertComponent()
    const removed = await page.evaluate(() => {
      const xeyes = document.querySelector('x-eyes')
      if (!xeyes) throw new Error('no element to remember')
      document.body.removeChild(xeyes);
      (window as any).xeyes = xeyes
      return true
    })
    expect(removed).toBeTruthy()
    const added = await page.evaluate(() => {
      if (!(window as any).xeyes) throw new Error('no remembered element')
      document.body.appendChild((window as any).xeyes);
      (window as any).xeyes = undefined
      return true
    })
    expect(added).toBeTruthy()
  })

  it('supports resetting the eye pupil position to the initial value', async () => {
    const { page, component } = await insertComponent()
    await component.callMethod('resetPosition')
    await page.waitForChanges()
  })
})

async function insertComponent(): Promise<{ page: E2EPage, component: E2EElement }> {
  const page = await newE2EPage()
  await page.setContent('<x-eyes></x-eyes>')
  const component = await page.find('x-eyes')
  await page.waitForChanges()
  return { page, component }
}

function collectErrors(page: E2EPage): () => number {
  let count = 0
  page.on('console', message => (message.type() === 'error' && ++count))
  return () => count
}
