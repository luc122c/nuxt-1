import { describe, expect, it } from 'vitest'
import { configurePWAOptions } from '../src/utils/config'

// Ruling B (see ledger): the mock supplies `nuxt3_8: true` because config.ts gates the
// appManifest glob on it, and under Nuxt 4 that gate is always open. Without it the
// "appManifest enabled" case would characterize the gate-closed path instead.
function makeCtx(appManifest: boolean) {
  const options: any = { strategies: 'generateSW' }
  const nuxt: any = {
    options: {
      buildDir: '/tmp/.nuxt',
      dev: false,
      app: { baseURL: '/', buildAssetsDir: '_nuxt/' },
      experimental: { payloadExtraction: false, appManifest },
      nitro: { output: { publicDir: '/tmp/.output/public' } },
    },
    callHook: async () => {},
  }
  return { ctx: { nuxt3_8: true, options, nuxt, publicDirFolder: '/tmp/public', resolver: {} } as any, options }
}

describe('appManifest gate', () => {
  it('adds the builds glob when appManifest is enabled', () => {
    const { ctx, options } = makeCtx(true)
    configurePWAOptions(ctx, {})
    expect(options.workbox.globPatterns).toContain('_nuxt/builds/**/*.json')
  })

  it('does not add the builds glob when appManifest is disabled', () => {
    const { ctx, options } = makeCtx(false)
    configurePWAOptions(ctx, {})
    expect(options.workbox.globPatterns ?? []).not.toContain('_nuxt/builds/**/*.json')
  })
})
