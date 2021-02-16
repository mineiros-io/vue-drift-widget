import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createDriftPlugin } from '/drift/index'

createApp(App)
  .use(
    createDriftPlugin({
      widgetId: import.meta.env.VITE_DRIFT_WIDGET_ID as string,
    }),
  )
  .mount('#app')
