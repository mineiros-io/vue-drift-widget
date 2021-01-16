import { App } from 'vue'
import defaultConfig, { VueDriftWidgetConfig } from './config'
import { DriftWidget } from './types'
import useDrift from './usedrift'

const VueDriftWidget: DriftWidget = {
  install: (
    app: App,
    widgetId: string,
    config: VueDriftWidgetConfig = defaultConfig,
  ) => {
    // Merge default and provided config
    const driftConfig = { ...defaultConfig, ...config }

    const { loadScript } = useDrift()
    loadScript(widgetId, driftConfig)

    app.provide('drift', driftConfig)
  },
}

export const createDrift = (
  widgetId: string,
  config?: VueDriftWidgetConfig,
): DriftWidget => {
  return {
    install: (app: App) => VueDriftWidget.install(app, widgetId, config),
  }
}
