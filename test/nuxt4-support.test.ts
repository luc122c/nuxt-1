import { existsSync, readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'))
const moduleSource = readFileSync(new URL('../src/module.ts', import.meta.url), 'utf-8')
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf-8')

describe('nuxt 4 support', () => {
  it('declares a nuxt 4 floor in module meta', () => {
    expect(moduleSource).toContain("nuxt: '>=4.0.0'")
  })

  it('pins @nuxt/kit to v4', () => {
    expect(pkg.dependencies['@nuxt/kit']).toMatch(/^\^4\./)
  })

  it('pins @nuxt/schema and nuxt to v4', () => {
    expect(pkg.devDependencies['@nuxt/schema']).toMatch(/^\^4\./)
    expect(pkg.devDependencies.nuxt).toMatch(/^\^4\./)
  })

  it('drops the nuxt 3 component tree', () => {
    expect(existsSync(new URL('../src/runtime/components/nuxt4', import.meta.url))).toBe(false)
  })

  it('has no nuxt 3 branding in the readme or description', () => {
    // The migration note legitimately mentions "Nuxt 3"; only version-branding copy must go.
    expect(readme).not.toMatch(/for Nuxt 3/)
    expect(readme).not.toMatch(/Plugin for Nuxt 3/)
    expect(pkg.description).not.toMatch(/Nuxt 3/)
  })
})
