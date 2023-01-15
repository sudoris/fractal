<script setup>
import { inject } from 'vue'

import Editor from './components/editor/Editor.vue'
import Builder from './components/builder/Builder.vue'

const config = inject('fractalConfig')
</script>

<template>
  <div id="fractal">
    {{ config }}
    <Editor />
    <Builder />
  </div>
</template>
