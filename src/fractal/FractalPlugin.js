import Fractal from './Fractal.vue'

// fractal plugin
export default {
  install: (app, options) => {
    app.provide('fractalConfig', options)
    app.component('Fractal', Fractal)
  }
}