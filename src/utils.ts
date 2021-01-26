import { warn, watch } from 'vue'
import { DriftWidgetPluginConfig } from './types'

const inBrowser: boolean = typeof window !== 'undefined'

const initWidget = (id: string, config: DriftWidgetPluginConfig): void => {
  if (!inBrowser) {
    throw new Error('Window object is missing.')
  }

  if (window.drift) {
    warn('Drift widget script has been loaded already.')
    return
  }

  watch(
    config,
    (config) => {
      // Dynamically load dependencies
      if (config.loadScript && !hasScript()) {
        loadScript(config.snippetVersion)
      }

      // Dynamically initalize widget
      if (config.enabled && hasScript() && !window.drift?.hasInitialized) {
        window.drift?.load(id)
      }
    },
    { immediate: true },
  )
}

/**
 * Load drift dependencies
 */
const loadScript = (snippetVersion = '0.3.1'): void => {
  const script = document.createElement('script')
  script.innerText = `!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION="${snippetVersion}";`
  document.body.appendChild(script)
}

export { initWidget, loadScript }
/**
 * Check if the Drift script is in the document
 */
const hasScript = (): boolean => {
  if (!window.drift) return false

  return Array.from(document.getElementsByTagName('script')).some((script) =>
    script.innerHTML.includes('js.driftt.com'),
  )
}
