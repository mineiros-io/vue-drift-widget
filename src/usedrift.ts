import { inject } from 'vue'
import { Drift } from './drift'
<<<<<<< HEAD
import { DriftPluginConfig, DRIFT_PLUGIN_CONFIG } from './types'

export const useDrift = (): Drift | undefined => {
  return window.drift
}

export const useDriftPluginConfig = (): DriftPluginConfig | undefined => {
  return inject<DriftPluginConfig>(DRIFT_PLUGIN_CONFIG)
}
=======
import { DriftWidgetPluginConfig, DRIFT_CONFIG } from './types'

const useDriftAPI = (): Drift | undefined => {
  const drift = window.drift

  return drift
}

const useDriftConfig = (): DriftWidgetPluginConfig | undefined => {
  return inject<DriftWidgetPluginConfig>(DRIFT_CONFIG)
}

export { useDriftAPI, useDriftConfig }
>>>>>>> 9ce9c20 (feat: implement the drift widget and its api)
