<script setup>
import { Footer } from '../components'
import { services } from '../utils/consts'
</script>

<template>
  <section
    class="desktop-xl:px-32 desktop-lg:px-10 desktop-xl:h-screen px-10 tablet-md:px-16 pt-10 tracking-tight"
  >
    <div class="desktop-xl:py-10">
      <h2
        class="text-[#666565] uppercase desktop-xl:text-4xl desktop-lg:text-2xl text-xl desktop-xl:py-10 font-medium underline underline-offset-4 decoration-[#2E6CA4]"
      >
        Servicios
      </h2>
      <div
        class="sm:grid lg:grid-cols-4 tablet-md:grid-cols-2 mobile-md:grid-cols-2 desktop-lg:px-3 desktop-xl:py-16 mobile-md:px-2 py-10 px-16 mobile-xs:px-2 mobile-sm:px-2 sm:gap-10 mobile-xs:space-y-6 mobile-sm:space-y-6"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="shadow-md border-none rounded-lg desktop-xl:w-96 desktop-lg:w-72 duration-300 hover:scale-105 bg-[#D9D9D9]"
        >
          <img class="rounded-t-lg" :src="service.src" :alt="service.name" />
          <div class="p-5">
            <h5
              class="text-xl font-bold text-center tracking-tight text-[#6e6e6e]"
            >
              {{ service.name }}
            </h5>
            <ul
              class="flex flex-col px-5 list-disc list-inside tracking-tight"
              v-for="(desc, index) in service.description"
            >
              <li
                class="text-md text-start tracking-tight text-[#6e6e6e] font-light"
                :key="index"
              >
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <component :is="Footer" id="footer"></component>
</template>
