<script setup>
import { RouterLink } from 'vue-router';
import { MobileMenu } from '@/components';
</script>

<template>
  <header>
    <nav
      class="flex items-center tablet-md:justify-center desktop-xl:justify-center desktop-lg:justify-center shadow-lg shadow-gray-600 h-20 border-b-2 border-b-black tracking-tight"
    >
      <RouterLink to="/" class="flex items-center gap-2 ml-5">
        <strong class="desktop-xl:text-xl text-lg">JuanCar</strong>
        <img
          src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998071/logo_bs3tv5.svg"
          alt="logo"
          class="h-10 w-10 border-[1px] border-gray-600 rounded-full"
      /></RouterLink>

      <component :is="MobileMenu" />

      <nav class="hidden lg:flex justify-around tracking-tight">
        <div
          class="text-[#909090] desktop-xl:ml-24 desktop-lg:ml-12 tablet-md:ml-10 desktop-xl:mr-24 desktop-lg:mr-12 desktop-lg:space-x-24 desktop-xl:space-x-32 tablet-md:space-x-6 py-2"
        >
          <a
            href="/#como-funciona"
            class="hover:text-[#2E6CA4] duration-300 ease-in-out"
            >¿Cómo funciona?</a
          >
          <a
            href="/#que-incluye"
            class="hover:text-[#2E6CA4] duration-300 ease-in-out"
            >¿Qué incluye?</a
          >
          <a
            href="/servicios"
            class="hover:text-[#2E6CA4] duration-300 ease-in-out"
            >Servicios</a
          >
          <a
            href="/areas-de-cobertura"
            class="hover:text-[#2E6CA4] duration-300 ease-in-out"
            >Zonas de cobertura</a
          >
          <a
            href="/cotizar"
            class="hover:text-[#2E6CA4] duration-300 ease-in-out"
            >Solicitar cotización</a
          >
        </div>
      </nav>
      <button
        class="hidden lg:flex items-center gap-2 tablet-md:relative left-5 border-black py-2 border-2 rounded-2xl px-3"
      >
        <img
          src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998065/logic-date_qbgxyq.svg"
          alt="date"
          class="h-6 w-6"
        />
        <a
          href="/agendar-visita"
          class="hover:text-[#2E6CA4] duration-300 ease-in-out"
          >Agendar visita</a
        >
      </button>
    </nav>
  </header>
</template>
