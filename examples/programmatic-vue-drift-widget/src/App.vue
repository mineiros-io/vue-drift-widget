<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div>
    drift configuration {{ driftConfig }}
  </div>
  <button @click="initDrift()" :disabled="driftConfig?.enabled">Initalize Drift</button>
</template>

<script lang="ts">
import { defineComponent, inject} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useDriftPluginConfig } from '/drift/index'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {

    const driftConfig = useDriftPluginConfig()

    const initDrift = ():void => {

      if(driftConfig) {
        driftConfig.enabled = true
      }
    }

    return { driftConfig, initDrift }
  }
})
</script>
