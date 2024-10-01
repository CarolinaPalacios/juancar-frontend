<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import {
  HowItWorks,
  WhatIsIncluded,
  Technologies,
  Footer,
  About,
} from '@/components';
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

<template>
  <nav
    class="hidden lg:flex border-b-2 border-b-gray-400 h-14 items-center justify-center tracking-tight"
  >
    <div
      class="flex text-[#262626] items-center desktop-xl:space-x-60 desktop-lg:space-x-32 tablet-md:space-x-12"
    >
      <div class="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998002/clock_xickvo.svg"
          alt="clock"
          class="h-6 w-6"
        />
        <p>Lunes a Sábados de 9:00 a 19:00hs</p>
      </div>
      <div class="flex items-center">
        <img
          src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998114/mobile_f5airq.svg"
          alt="mobile"
          class="h-8 w-7"
        />
        <p>+54 11 2718-0197</p>
      </div>
      <div class="flex items-center">
        <img
          src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998061/location-nav_pufysc.svg"
          alt="location"
          class="h-8 w-8 p-0 mb-0.5"
        />
        <p>Buenos Aires, Argentina</p>
      </div>
      <div class="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998198/tools_wbaihl.svg"
          alt="tools"
          class="h-6 w-6"
        />
        <RouterLink to="/servicios">Otros Servicios</RouterLink>
      </div>
    </div>
  </nav>
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
  <section
    v-else
    class="desktop-xl:px-32 desktop-lg:px-10 tablet-md:px-16 desktop-xl:py-10 desktop-lg:py-9 tablet-md:py-9 mobile-xs:px-5 py-5 px-10 mobile-md:py-10 lg:grid lg:grid-cols-2 desktop-xl:gap-10 desktop-lg:gap-5 tracking-tight"
  >
    <div class="lg:order-1 flex flex-col justify-center">
      <h1
        class="desktop-xl:text-6xl desktop-lg:text-5xl text-3xl font-extrabold desktop-lg:pb-5 tablet-md:pb-5"
      >
        Verificación Mecánica Precompra a domicilio
      </h1>
      <div class="lg:grid lg:grid-cols-3">
        <div class="order-1">
          <p
            class="text-[#707070] desktop-xl:text-xl desktop-lg:text-lg tablet-md:text-xl"
          >
            A partir de
          </p>
          <p
            class="desktop-xl:text-5xl desktop-lg:text-3xl text-2xl font-semibold text-[#2E6CA4]"
          >
            ${{ getPriceByReportName('VMA') }}
          </p>
        </div>

        <RouterLink
          to="/agendar-visita"
          class="self-center order-2 desktop-xl:ml-16 desktop-lg:ml-10"
        >
          <button
            class="bg-[#2e6da4cf] hover:bg-[#2E6CA4] transition-all hover:scale-105 hover:shadow-md hover:shadow-[#2E6CA4] duration-300 border-2 border-black desktop-xl:py-2 desktop-lg:py-1 desktop-xl:px-10 desktop-lg:px-8 px-3 py-1 text-nowrap rounded-2xl desktop-xl:mt-2 desktop-lg:my-0 my-3 tablet-md:relative right-6"
          >
            <span class="font-semibold desktop-xl:text-base text-sm">
              Agendar verificación
            </span>
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="lg:order-2 mobile-xs:py-2 mobile-sm:py-2 mobile-md:py-2">
      <img
        src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998134/peritaje_car_parts_explain_nbjzob.png"
        alt="peritaje"
        class="w-full mx-auto"
      />
    </div>
  </section>
  <section
    class="mobile-xs:hidden mobile-sm:hidden mobile-md:px-10 tracking-tight"
  >
    <h2
      class="desktop-xl:text-2xl desktop-lg:text-xl tablet-md:text-xl mobile-md:text-lg text-center desktop-xl:py-2 desktop-lg:py-1"
    >
      SERVICIOS
      <strong class="text-[#2E6CA4] font-medium">TRANSPARENTES</strong>,
      <strong class="text-[#2E6CA4] font-medium">ACCESIBLES</strong>, Y
      <strong class="text-[#2E6CA4] font-medium">CONVENIENTES</strong> PARA TU
      VEHICULO
    </h2>
    <div class="flex justify-center items-center">
      <div
        class="grid grid-cols-3 desktop-xl:gap-32 desktop-lg:gap-12 desktop-xl:pt-5 desktop-lg:pt-2 pt-5 tablet-md:gap-8"
      >
        <div class="order-1 flex flex-col items-center">
          <div class="flex items-center">
            <img
              src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998124/mobile-user_wi9778.svg"
              alt="mobile"
              class="desktop-xl:h-28 desktop-lg:h-20 mobile-md:h-20 tablet-md:h-20"
            />
            <svg
              class="w-10 h-2 relative desktop-xl:left-28 desktop-lg:left-20 mobile-md:left-14 tablet-md:left-14"
            >
              <line
                x1="0"
                y1="0.5"
                x2="100%"
                y2="0.5"
                stroke="black"
                stroke-width="1"
              />
            </svg>
          </div>
          <span class="relative right-5 pt-2 desktop-xl:text-base text-md"
            >REPORTES Y FOTOS DIGITALES</span
          >
          <span
            class="text-[#5E5E5E] max-w-[250px] text-center relative right-5 text-sm"
            >Te informamos las actualizaciones y pruebas de la reparación</span
          >
        </div>
        <div class="order-2 flex flex-col items-center relative left-4">
          <div class="flex items-center">
            <img
              src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998029/hucha_w7a6g8.png"
              alt="hucha"
              class="desktop-xl:h-28 desktop-lg:h-20 mobile-md:h-20 tablet-md:h-20"
            />
            <svg
              class="w-10 h-2 relative desktop-xl:left-28 desktop-lg:left-20 mobile-md:left-16 tablet-md:left-20"
            >
              <line
                x1="0"
                y1="0.5"
                x2="100%"
                y2="0.5"
                stroke="black"
                stroke-width="1"
              />
            </svg>
          </div>
          <span class="relative right-5 pt-2 desktop-xl:text-base text-md"
            >CUIDAMOS TU PRESUPUESTO</span
          >
          <span
            class="text-[#5E5E5E] max-w-[250px] text-center relative right-5 desktop-xl:text-sm text-sm"
            >Tenemos repuestos de calidad a precio accesible, y te diremos que
            hacer por nivel de urgencia</span
          >
        </div>
        <div class="order-3 flex flex-col items-center">
          <div class="flex items-center">
            <img
              src="https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998026/home-location_d6uvo3.svg"
              alt="mobile"
              class="desktop-xl:h-28 desktop-lg:h-20 mobile-md:h-20 tablet-md:h-20"
            />
          </div>
          <span class="relative right-1 pt-2 desktop-xl:text-base text-md"
            >SERVICIO A DOMICILIO</span
          >
          <span
            class="text-[#5E5E5E] max-w-[250px] text-center relative desktop-xl:text-sm text-sm"
            >Verificamos en el domilicio que nos indiques, ya sea del comprador
            o vendedor</span
          >
        </div>
      </div>
    </div>
  </section>
  <component :is="HowItWorks" id="como-funciona"></component>
  <component :is="WhatIsIncluded" id="que-incluye"></component>
  <component :is="Technologies" id="tecnologías"></component>
  <component :is="About" id="acerca-de"></component>
  <component :is="Footer" id="footer"></component>
  <div></div>
</template>
