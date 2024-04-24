<script setup lang="ts">
import { DatePicker, Footer } from '../components'
</script>

<template>
  <section
    class="desktop-xl:px-32 desktop-lg:px-10 px-10 tablet-md:px-16 pt-10 tracking-tight"
  >
    <div class="desktop-xl:py-10">
      <h2
        class="text-[#666565] uppercase desktop-xl:text-4xl desktop-lg:text-2xl text-xl desktop-xl:py-10 font-medium underline underline-offset-4 decoration-[#2E6CA4]"
      >
        Agendar visita
      </h2>
    </div>
  </section>
  <component :is="DatePicker" id="datepicker"></component>
  <component :is="Footer" id="footer"></component>
</template>
