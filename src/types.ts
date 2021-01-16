import { App } from 'vue'
import { VueDriftWidgetConfig } from './config'

export interface DriftWidget {
  /**
   * Installs the drift widget into an app
   */
  install(app: App, widgetId: string, config?: VueDriftWidgetConfig): void
}
