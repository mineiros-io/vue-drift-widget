import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createDriftPlugin } from '@mineirosio/vue-drift-widget'

createApp(App)
  .use(
    createDriftPlugin({
      widgetId: import.meta.env.VITE_DRIFT_WIDGET_ID as string,
    }),
  )
  .mount('#app')
