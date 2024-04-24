<template>
  <section
    class="desktop-xl:px-32 desktop-lg:px-10 h-full bg-[#D9D9D9] px-10 tablet-md:px-16 pt-10 tracking-tight"
  >
    <div class="desktop-xl:py-9">
      <h2
        class="text-[#666565] uppercase desktop-xl:text-4xl desktop-lg:text-2xl text-xl desktop-xl:py-10 font-medium underline underline-offset-4 decoration-[#2E6CA4]"
      >
        Zonas de cobertura
      </h2>
      <div
        class="sm:grid lg:grid-cols-4 desktop-lg:space-x-16 tablet-md:grid-cols-3 desktop-lg:px-10 mobile-md:grid-cols-2 desktop-xl:px-20 desktop-xl:py-4 mobile-md:px-2 py-10 mobile-xs:px-2 mobile-sm:px-2 sm:gap-10 mobile-xs:space-y-6 mobile-sm:space-y-6"
      >
        <div
          v-for="(area, index) in areas"
          :key="index"
          class="flex flex-col items-start"
        >
          <h5 class="text-3xl font-medium text-center text-[#2E6CA4] uppercase">
            {{ area.name }}
          </h5>
          <ul class="p-0 m-0" v-for="(subarea, index) in area.subareas">
            <li
              class="text-md text-start text-[#6e6e6e] font-light"
              :key="index"
            >
              {{ area.name }} / {{ subarea }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <component :is="Footer" id="footer"></component>
</template>

<script setup lang="ts">
import { Footer } from '../components'
import { areas } from '../utils/consts'
</script>
