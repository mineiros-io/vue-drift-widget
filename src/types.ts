import { App } from 'vue'

const DRIFT_CONFIG = 'driftConfig'

interface DriftWidget {
  /**
   * Installs the drift widget into an app
   */
  install(app: App, config: DriftWidgetPluginConfig): void
}

interface DriftWidgetPluginConfig {
  /**
   * The id of the drift widget that we'd like to initalize.
   */
  widgetId: string
  /**
   * The version of the drift snippet to be initalized.
   *
   * @default '0.3.1'
   */
  snippetVersion?: string
  /**
   * Plugin can be disabled by setting this to `false`. Useful if you'd like to load the script but: `enabled: !!GDPR_Cookie`
   *
   * @default true
   */
  enabled?: boolean
  /**
   * Whether or not to load the Drift Widget Script (Helpful if you are including Drift manually, but need the api functionality in components). Can also be used to separately the loading of the depdendencies and initialization of the widget.
   *
   * @default true
   */
  loadScript?: boolean
}

export { DriftWidget, DriftWidgetPluginConfig, DRIFT_CONFIG }
