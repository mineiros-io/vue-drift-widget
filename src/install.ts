<<<<<<< HEAD
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

export default createDriftPlugin
=======
import { App, reactive } from 'vue'
import { DriftWidget, DriftWidgetPluginConfig, DRIFT_CONFIG } from './types'
import { initWidget } from './utils'

const VueDriftWidget: DriftWidget = {
  install: (app: App, config: DriftWidgetPluginConfig) => {
    // Merge default and provided config
    const driftConfig: DriftWidgetPluginConfig = reactive({
      widgetId: config.widgetId,
      snippetVersion: '0.3.1',
      enabled: config.enabled ?? true,
      loadScript: config.loadScript ?? true,
    })

    initWidget(driftConfig.widgetId, driftConfig)

    app.provide(DRIFT_CONFIG, driftConfig)
  },
}

const useDriftWidgetPlugin = (config: DriftWidgetPluginConfig): DriftWidget => {
  return {
    install: (app: App) => VueDriftWidget.install(app, config),
  }
}

export default useDriftWidgetPlugin
>>>>>>> 9ce9c20 (feat: implement the drift widget and its api)
