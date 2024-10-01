<template>
  <section
    class="desktop-xl:px-32 desktop-lg:px-10 px-5 tablet-md:px-16 pt-10 bg-[#D9D9D9] desktop-xl:pt-20 tracking-tight"
  >
    <h2
      class="text-[#666565] uppercase desktop-xl:text-4xl desktop-lg:text-2xl desktop-xl:py-10 mobile-xs:pb-6 text-xl font-medium"
    >
      Que incluye
    </h2>
    <div
      class="sm:grid lg:grid-cols-4 md:grid-cols-3 desktop-xl:gap-x-28 desktop-lg:gap-x-5 desktop-xl:py-12 desktop-xl:px-40 desktop-lg:px-24 sm:gap-10 mobile-md:px-10 mobile-xs:space-y-6 mobile-sm:space-y-4 py-10 px-16 mobile-xs:px-12"
    >
      <div v-for="(item, index) in items" :key="index">
        <div class="flex flex-col items-center justify-center">
          <img
            :src="item.src"
            :alt="item.alt"
            class="desktop-xl:h-28 desktop-lg:h-20 desktop-xl:w-28 desktop-lg:w-20 mobile-xs:w-20 mobile-sm:w-24 sm:w-24"
          />
          <p
            class="text-[#2E6CA4] desktop-xl:text-xl desktop-lg:text-lg font-medium uppercase pt-3 text-nowrap"
          >
            {{ item.name }}
          </p>
          <p class="text-[#666565] desktop-xl:text-sm text-xs text-center">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { items } from '@/utils/consts';
</script>
