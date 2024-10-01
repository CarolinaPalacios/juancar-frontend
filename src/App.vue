<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import { Header } from './views';

const route = useRoute();

const showHeader = computed(() => {
  return !route.meta.requiresNoHeader;
});
</script>

<template>
  <Header v-if="showHeader" />
  <main>
    <RouterView />
  </main>
</template>
