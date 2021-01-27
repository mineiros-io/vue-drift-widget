import { warn, watch } from 'vue'
import { DriftPluginConfig } from './types'

const inBrowser: boolean = typeof window !== 'undefined'

export const initDriftPlugin = (config: DriftPluginConfig): void => {
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
      if (config.enabled && !hasDriftSnippet()) {
        loadDriftSnippet()
      }

      if (
        config.enabled &&
        hasDriftSnippet() &&
        !window.drift?.hasInitialized
      ) {
        window.drift?.load(config.widgetId)
      }
    },
    { immediate: true },
  )
}

/**
 * Load drift dependencies
 */
const loadDriftSnippet = (): void => {
  const script = document.createElement('script')
  script.innerText = `!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION="0.3.1";`
  document.body.appendChild(script)
}

/**
 * Check if the Drift script is in the document
 */
const hasDriftSnippet = (): boolean => {
  if (window.drift) return true

  return Array.from(document.getElementsByTagName('script')).some((script) =>
    script.innerHTML.includes('js.driftt.com'),
  )
}
