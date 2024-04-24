<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { GoogleMap, Marker } from 'vue3-google-map'
import { UserCircle2 } from '@iconsans/vue/bold'

const whyUs = [
  { name: 'Areas de cobertura', href: '/areas-de-cobertura' },
  { name: 'Precios', href: '/cotizar' },
  { name: 'Seguridad', href: '/#seguridad' },
  { name: 'Contacto', href: '/#contacto' },
  { name: 'Tecnología utilizada', href: '/#tecnologías' },
  { name: 'Cómo funciona', href: '/#como-funciona' },
  { name: 'Qué incluye', href: '/#que-incluye' },
  { name: 'Puntos de verificación', href: '/#puntos-de-verificación' },
]

const services = [
  { name: 'Cerrajería', href: '/servicios' },
  { name: 'Mecánica', href: '/servicios' },
  { name: 'Electrónica', href: '/servicios' },
  { name: 'Escaneo', href: '/servicios' },
]

const center = { lat: -34.62104415893555, lng: -58.57676315307617 }

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
</script>

<template>
  <footer
    class="desktop-xl:px-40 desktop-lg:px-24 desktop-xl:py-12 py-10 px-10 bg-[#2b2b2b] text-white tracking-tight"
  >
    <div
      class="grid md:grid-cols-2 lg:grid-cols-4 mobile-xs:space-y-6 mobile-sm:space-y-4 mobile-md:space-y-6"
    >
      <div class="">
        <div class="flex items-center border-b-2 border-[#2E6CA4] pb-2">
          <img src="../assets/logo.svg" alt="logo" class="h-10 w-10" />
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
            src="../assets/argentina.svg"
            alt="argentina"
            class="h-10 w-10"
          />
          <span>Argentina</span>
        </div>
        <div class="flex items-center gap-2 mt-5">
          <img src="../assets/phone.svg" alt="phone" class="h-5 w-5" />
          <a href="tel:+54 11 2718-0197">+54 11 2718-0197</a>
        </div>
        <div class="flex items-center gap-2 mt-5">
          <img src="../assets/mail.svg" alt="mail" class="h-5 w-5" />
          <a href="mailto:agustinochoa98@outlook.com"
            >agustinochoa98@outlook.com</a
          >
        </div>
        <div class="flex items-center gap-2 mt-5">
          <img src="../assets/location.svg" alt="location" class="h-5 w-5" />
          <span>Gral. Villegas 5456, Caseros, Buenos Aires</span>
        </div>
      </div>
      <div
        class="mt-2 relative desktop-xl:left-24 desktop-lg:left-20 md:left-10 mobile-xs:space-y-3 mobile-sm:space-y-3 mobile-md:space-y-3"
      >
        <h4 class="text-xl text-[#d5d5d5]">POR QUE JUANCAR</h4>
        <ul v-for="item in whyUs" class="mt-5 flex gap-2">
          <li
            :key="item.name"
            class="text-[#747474] hover:text-[#2E6CA4] cursor-pointer flex items-center"
          >
            <img src="../assets/arrow.svg" alt="arrow" class="h-5 w-5" />
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
        class="mt-2 relative tablet-md:left-10 desktop-xl:left-7 desktop-lg:left-16 mobile-xs:space-y-3 mobile-sm:space-y-3 mobile-md:space-y-3"
      >
        <h4 class="text-xl text-[#d5d5d5]">OTROS SERVICIOS</h4>
        <ul v-for="item in services" class="mt-5 flex gap-2">
          <li
            :key="item.name"
            class="text-[#747474] hover:text-[#2E6CA4] cursor-pointer flex items-center"
          >
            <img src="../assets/arrow.svg" alt="arrow" class="h-5 w-5" />
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
                src="../assets/instagram.svg"
                alt="instagram"
                class="h-9 w-9"
              />
            </a>
            <a
              href="https://www.facebook.com/taller.juancar8a/"
              target="_blank"
            >
              <img
                src="../assets/facebook.svg"
                alt="instagram"
                class="h-9 w-9"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          class="relative lg:left-10 desktop-xl:right-10 mobile-md:left-10 mt-2"
        >
          <h4 class="text-xl text-[#d5d5d5]">MAPA DEL SITIO</h4>
          <GoogleMap
            :api-key="apiKey"
            :center="center"
            :zoom="15"
            class="md:w-[80%] h-[200px] mt-5"
          >
            <Marker :options="{ position: center }" />
          </GoogleMap>

          <RouterLink
            to="/login"
            class="ml-auto mr-5 flex items-center gap-2 w-fit relative md:right-12 lg:right-10 desktop-xl:right-[17.7rem]"
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
