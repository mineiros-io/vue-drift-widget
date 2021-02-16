import { App } from 'vue'

export const DRIFT_PLUGIN_CONFIG = 'driftPluginConfig'

export interface DriftPlugin {
  /**
   * Installs the drift widget into an app
   */
  install(app: App, config: DriftPluginConfig): void
}

export interface DriftPluginConfig {
  /**
   * The id of the drift widget that we'd like to initalize.
   */
  widgetId: string
  /**
   * Plugin can be disabled by setting this to `false`. Useful if you'd like to load the script but: `enabled: !!GDPR_Cookie`
   *
   * @default true
   */
  enabled?: boolean
}
