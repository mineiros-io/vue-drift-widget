import { inject } from 'vue'
import { Drift } from './drift'
import { DriftPluginConfig, DRIFT_PLUGIN_CONFIG } from './types'

export const useDrift = (): Drift | undefined => {
  return window.drift
}

export const useDriftPluginConfig = (): DriftPluginConfig | undefined => {
  return inject<DriftPluginConfig>(DRIFT_PLUGIN_CONFIG)
}
