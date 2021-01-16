export interface VueDriftWidgetConfig {
  /**
   * With defer, the file gets downloaded asynchronously, but executed only when the document parsing is completed. Defaults to false, so the script is loaded `async` by default, which is the default behaviour of loading embed scripts.
   *
   * @default false
   */
  defer?: boolean
  /**
   * Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
   *
   * @default false
   */
  compatibility?: boolean
  /**
   * Plugin can be disabled by setting this to `false`. Useful if you'd like to load the script but: `enabled: !!GDPR_Cookie`
   *
   * @default true
   */
  enabled?: boolean
  /**
   * Whether or not display console logs debugs
   */
  debug?: boolean
  /**
   * Whether or not to load the Drift Widget Script (Helpful if you are including Drift manually, but need the api functionality in components)
   */
  loadScript?: boolean
}

const defaultConfig: VueDriftWidgetConfig = {
  enabled: true,
  debug: false,
  loadScript: true,
  defer: false,
  compatibility: false,
}

export default defaultConfig
