<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div>
    drift configuration {{ driftConfig }}
  </div>
  <button @click="loadScript()" :disable="!driftConfig?.loadScript">Load Drift Script</button>
  <button @click="initDrift()" :disabled="!driftConfig?.loadScript || driftConfig.enabled">Initalize Drift</button>
</template>

<script lang="ts">
import { defineComponent, inject} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { DriftWidgetPluginConfig, useDriftConfig } from '/drift/index'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // const driftConfig = inject<DriftWidgetPluginConfig>('driftConfig')
    const driftConfig = useDriftConfig()

    const loadScript = (): void  => {
      if(driftConfig) {
        driftConfig.loadScript = true
      }
    }
    const initDrift = ():void => {
      if(driftConfig) {
        driftConfig.enabled = true
      }
    }

    return { loadScript, driftConfig, initDrift }
  }
})
</script>
