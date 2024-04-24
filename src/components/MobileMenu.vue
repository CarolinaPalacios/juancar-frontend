<template>
  <div class="lg:hidden tracking-tight">
    <button
      class="hidden relative mobile-xs:left-[12rem] mobile-sm:left-[14rem] mobile-md:left-[42rem] mobile-xs:block mobile-sm:block mobile-md:block w-[30px] h-[28px]"
      @click="toggleMobileMenu"
    >
      <MenuHamburger class="w-[30px] h-[28px]" />
    </button>
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden absolute top-0 left-0 w-full mobile-xs:h-[30rem] mobile-sm:h-[32rem] mobile-md:h-[28rem] flex flex-col items-center justify-center duration-500 transition-all text-xl font-medium mobile-xs:text-lg bg-white"
    >
      <button
        class="absolute top-5 left-5 text-[#6d6d6d] focus:outline-none"
        @click="toggleMobileMenu"
      >
        <Cross class="w-8 h-8" />
      </button>
      <nav class="flex flex-col items-start">
        <ul
          class="flex flex-col items-start gap-6 text-[#6d6d6d] text-sm"
          v-for="item in menuItems"
        >
          <li class="flex items-center gap-2 py-3">
            <component :is="item.icon" class="h-5 w-5" />
            <a :href="item.href">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <nav
        class="flex mobile-xs:flex-col mobile-sm:flex-col mobile-md:flex-row items-start gap-3 mt-6 border-t-2 border-t-gray-400 pt-5"
      >
        <div class="flex items-center gap-2 relative left-1 mobile-md:top-1">
          <img src="../assets/clock.svg" alt="clock" class="h-5 w-5" />
          <p class="text-[#6d6d6d] text-xs">Lunes a Sábado de 9:00 a 19:00hs</p>
        </div>
        <div class="flex items-center gap-2">
          <img src="../assets/mobile.svg" alt="mobile" class="h-7 w-7" />
          <p class="text-[#6d6d6d] text-xs relative right-1">
            +54 11 2718-0197
          </p>
        </div>
        <div
          class="flex items-center gap-2 relative mobile-md:bottom-0.5 mobile-xs:bottom-1 mobile-xs:right-0.5 mobile-sm:right-0.5"
        >
          <img
            src="../assets/location-nav.svg"
            alt="location"
            class="h-8 w-8"
          />
          <p class="text-[#6d6d6d] text-xs relative right-1">
            Buenos Aires, Argentina
          </p>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MenuHamburger, Cross } from '@iconsans/vue/linear'
import { Area, Box, Coins, Gear, Tools } from './icons'
import { menuItems } from '../utils/consts'

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
</script>
