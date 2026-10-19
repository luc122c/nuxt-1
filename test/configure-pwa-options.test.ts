import { describe, expect, it } from 'vitest'
import { configurePWAOptions } from '../src/utils/config'

// Characterizes the appManifest glob. The old version gate is gone: under Nuxt 4
// `experimental.appManifest` defaults to true, so the glob is driven by `appManifest` alone.
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
  return { ctx: { options, nuxt, publicDirFolder: '/tmp/public', resolver: {} } as any, options }
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
