<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Header } from './views'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>
