<script setup>
import { RouterLink } from 'vue-router';
import { UserCircle2 } from '@iconsans/vue/bold';
import { whyUs, footerServices } from '../utils/consts';
</script>

<template>
  <footer
    class="desktop-xl:px-32 desktop-lg:px-24 desktop-xl:py-12 py-10 px-10 bg-[#2b2b2b] text-white tracking-tight"
  >
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 mobile-xs:space-y-6 mobile-sm:space-y-4 mobile-md:space-y-6"
    >
      <div class="relative desktop-xl:left-32 desktop-lg:left-24">
        <div class="flex items-center border-b-2 border-[#2E6CA4] pb-2">
          <img
            src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998071/logo_bs3tv5.svg"
            alt="logo"
            class="h-10 w-10"
          />
          <span
            class="desktop-xl:text-4xl desktop-lg:text-3xl text-lg font-medium ml-3"
            >JUANCAR</span
          >
        </div>

        <p class="text-[#747474] mt-5">
          © JUANCAR. Nuestras verificaciones son realizadas por profesionales
          mecánicos y gestores que buscan agregar tranquilidad en la transacción
          y no busca el reemplazo ni la búsqueda de información o documentos que
          se obtienen en organismos oficiales.
        </p>
        <div class="flex items-center gap-2 mt-5">
          <img
            src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713997971/argentina_mrwqvx.svg"
            alt="argentina"
            class="h-10 w-10"
          />
          <span>Argentina</span>
        </div>
        <div class="flex items-center gap-2 mt-5">
          <img
            src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998135/phone_mwv9tp.svg"
            alt="phone"
            class="h-5 w-5"
          />
          <a href="tel:+54 11 2718-0197">+54 11 2718-0197</a>
        </div>
        <div class="flex items-center gap-2 mt-5">
          <img
            src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998072/mail_lkshtp.svg"
            alt="mail"
            class="h-5 w-5"
          />
          <a href="mailto:electronicajuancar@gmail.com"
            >electronicajuancar@gmail.com</a
          >
        </div>
        <div class="flex items-center gap-2 mt-5">
          <img
            src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998060/location_xoay5j.svg"
            alt="location"
            class="h-5 w-5"
          />
          <span>Gral. Villegas 5456, Caseros, Buenos Aires</span>
        </div>
      </div>
      <div
        class="mt-2 relative desktop-xl:left-60 desktop-lg:left-20 md:left-10 mobile-xs:space-y-3 mobile-sm:space-y-3 mobile-md:space-y-3"
      >
        <h4 class="text-xl text-[#d5d5d5]">POR QUE JUANCAR</h4>
        <ul v-for="item in whyUs" class="mt-5 flex gap-2">
          <li
            :key="item.name"
            class="text-[#747474] hover:text-[#2E6CA4] cursor-pointer flex items-center"
          >
            <img
              src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713997972/arrow_xmk6a4.svg"
              alt="arrow"
              class="h-5 w-5"
            />
            <RouterLink v-if="!item.href.includes('#')" :to="item.href">
              {{ item.name }}
            </RouterLink>
            <a
              v-if="item.href.includes('#')"
              :href="item.href"
              class="hover:text-[#2E6CA4] duration-300 ease-in-out"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <div
        class="mt-2 relative tablet-md:left-10 desktop-xl:left-32 desktop-lg:left-16 mobile-xs:space-y-3 mobile-sm:space-y-3 mobile-md:space-y-3"
      >
        <h4 class="text-xl text-[#d5d5d5]">OTROS SERVICIOS</h4>
        <ul v-for="item in footerServices" class="mt-5 flex gap-2">
          <li
            :key="item.name"
            class="text-[#747474] hover:text-[#2E6CA4] cursor-pointer flex items-center"
          >
            <img
              src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713997972/arrow_xmk6a4.svg"
              alt="arrow"
              class="h-5 w-5"
            />
            <RouterLink
              :to="item.href"
              class="hover:text-[#2E6CA4] duration-300 ease-in-out"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
        <div class="mt-5">
          <h4 class="text-xl text-[#d5d5d5]">REDES SOCIALES</h4>
          <div class="flex gap-4 ml-2 mt-5">
            <a href="https://www.instagram.com/taller.juancar/" target="_blank">
              <img
                src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998035/instagram_ppe2ic.svg"
                alt="instagram"
                class="h-9 w-9"
              />
            </a>
            <a
              href="https://www.facebook.com/taller.juancar8a/"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998025/facebook_sleeq3.svg"
                alt="instagram"
                class="h-9 w-9"
              />
            </a>
          </div>
          <RouterLink
            to="/login"
            class="ml-auto flex items-center gap-2 w-fit relative md:right-12 lg:right-10 desktop-xl:right-24"
          >
            <component :is="UserCircle2" class="h-8 w-8 mt-10 text-[#2E6CA4]" />
            <span class="text-[#747474] mt-10">Admin</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
  <footer
    class="bg-[#2b2b2b] border-t-2 border-[#9a9a9a] flex items-center justify-center h-16"
  >
    <p class="text-[#747474] mobile-xs:text-sm mobile-sm:text-sm">
      Desarrollado por
      <a
        href="https://carolina-palacios.vercel.app/"
        target="_blank"
        class="text-[#d5d5d5]"
        >Carolina Palacios</a
      >
      | Córdoba, Argentina
    </p>
  </footer>
</template>
