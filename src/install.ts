import { App, reactive, Plugin } from 'vue'
import { DriftPluginConfig, DRIFT_PLUGIN_CONFIG } from './types'
import { initDriftPlugin } from './init'

const installDriftPlugin = (app: App, config: DriftPluginConfig) => {
  const driftConfig = reactive<DriftPluginConfig>({
    widgetId: config.widgetId,
    enabled: config.enabled ?? true,
  })

  initDriftPlugin(driftConfig)

  app.provide(DRIFT_PLUGIN_CONFIG, driftConfig)
}

const createDriftPlugin = (config: DriftPluginConfig): Plugin => {
  return {
    install: (app: App) => installDriftPlugin(app, config),
  }
}

export { createDriftPlugin }
