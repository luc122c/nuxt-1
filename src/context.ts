import type { Resolver } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { PwaModuleOptions } from './types'

export interface NuxtPWAContext {
  nuxt4: boolean
  options: PwaModuleOptions
  nuxt: Nuxt
  resolver: Resolver
  publicDirFolder: string
}
