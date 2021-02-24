<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    drift configuration {{ driftConfig }}
  </div>
  <button @click="initDrift()" :disabled="driftConfig.enabled">Initalize Drift</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDriftPluginConfig } from '@mineirosio/vue-drift-widget'

export default defineComponent({
  name: 'App',
  setup() {
    // const driftConfig = inject<DriftWidgetPluginConfig>('driftConfig')
    const driftConfig = useDriftPluginConfig()

    const initDrift = (): void => {
      if(driftConfig) {
        driftConfig.enabled = true
      }
    }

    return { driftConfig, initDrift }
  }
})
</script>
