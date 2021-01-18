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
