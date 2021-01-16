import { VueDriftWidgetConfig } from './config'

const useDrift = (): { loadScript: typeof loadScript } => {
  const loadScript = (
    id: string,
    config: VueDriftWidgetConfig,
    snippetVersion = '0.3.1',
  ): void => {
    if (window.drift) {
      console.log('Drift widget script has been loaded already.')
      return
    }

    const doc = document,
      script = doc.createElement('script')

    script.innerText = `!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION="${snippetVersion}",drift.load("${id}");`

    script.async = !config.defer
    script.defer = Boolean(config.defer || config.compatibility)

    doc.body.appendChild(script)
  }

  return { loadScript }
}

export default useDrift
