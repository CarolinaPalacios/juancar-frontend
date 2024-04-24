<template>
  <section
    class="desktop-xl:px-32 desktop-lg:px-10 h-full bg-gray-200 pt-10 tracking-tight"
  >
    <div class="desktop-xl:pt-9">
      <h2
        class="text-[#666565] uppercase desktop-xl:text-4xl desktop-lg:text-2xl text-xl desktop-xl:pt-10 px-10 tablet-md:px-4 font-medium underline underline-offset-4 decoration-[#2E6CA4]"
      >
        Cotizacion
      </h2>
      <div class="py-10 flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(report, index) in reports"
            :key="index"
            :class="[
              'bg-white',
              'rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105',
            ]"
          >
            <div :class="[report.color, 'p-1']"></div>
            <div class="flex flex-col justify-between h-full">
              <div class="px-8 pt-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">
                  {{ report.name }}
                </h2>
                <p class="text-gray-600 mb-6">{{ report.description }}</p>
                <p class="text-4xl font-bold text-gray-800 mb-2">
                  {{ report.price }}
                </p>
                <strong class="uppercase">{{ report.subtitle }}</strong>
                <ul class="text-sm text-gray-600 mb-6 mt-2">
                  <template v-if="report.extra">
                    <p class="text-sm text-gray-600 mb-6 font-light">
                      {{ report.extra }}
                    </p>
                  </template>
                  <li
                    v-for="(service, index) in report.services"
                    :key="index"
                    class="mb-2 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {{ service }}
                  </li>
                  <li
                    v-if="report.numberOfPoints"
                    class="mb-2 flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p>
                      Mas de
                      <strong
                        >{{ report.numberOfPoints }} puntos de
                        verificación</strong
                      >
                    </p>
                  </li>
                </ul>
              </div>
              <div class="p-4 pb-8 flex justify-center">
                <RouterLink
                  :to="report.link"
                  :class="[
                    'w-fit',
                    report.buttonColor,
                    'text-white rounded-full px-20 py-2 focus:outline-none focus:shadow-outline-blue',
                    report.hoverColor,
                    'active:',
                    report.activeColor,
                  ]"
                >
                  Agendar ahora
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <component :is="Footer" id="footer"></component>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Footer } from '../components'
import { reports } from '../utils/consts'
</script>
