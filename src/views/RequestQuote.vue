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
      <div
        v-if="priceStore.isLoading || priceStore.prices.length === 0"
        class="flex justify-center py-96"
      >
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Cargando...</span>
        </div>
      </div>
      <div v-else class="py-10 flex items-center justify-center">
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
                <p class="text-gray-600">Desde</p>
                <p class="text-4xl font-bold text-gray-800 mb-2">
                  ${{ getPriceByReportName(report.name) }}
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
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Footer } from '@/components';
import { reports } from '@/utils/consts';
import { usePriceStore } from '@/store/price';

const priceStore = usePriceStore();

onMounted(async () => {
  try {
    await priceStore.getPrices();
  } catch (error) {
    console.error('Error cargando precios:', error);
  }
});

const getPriceByReportName = (reportName) => {
  const price = priceStore.prices.find(
    (price) => price.verificationType === reportName
  );
  return price?.price.toLocaleString();
};
</script>
