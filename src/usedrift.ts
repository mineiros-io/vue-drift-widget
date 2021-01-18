import { inject } from 'vue'
import { Drift } from './drift'
import { DriftWidgetPluginConfig, DRIFT_CONFIG } from './types'

const useDriftAPI = (): Drift | undefined => {
  const drift = window.drift

  return drift
}

const useDriftConfig = (): DriftWidgetPluginConfig | undefined => {
  return inject<DriftWidgetPluginConfig>(DRIFT_CONFIG)
}

export { useDriftAPI, useDriftConfig }
