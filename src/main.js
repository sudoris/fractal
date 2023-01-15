import { createApp } from 'vue'
import App from './App.vue'
import FractalPlugin from './fractal/FractalPlugin'

const app = createApp(App)

const fractalConfig = {
  mode: 'test',
  msg: 'hello fractal'
}
app.use(FractalPlugin, fractalConfig)

app.mount('#app')
