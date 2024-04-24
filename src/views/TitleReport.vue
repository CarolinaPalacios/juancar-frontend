<template>
  <nav
    class="border-b-2 border-b-gray-400 h-14 flex items-center justify-center mobile-xs:hidden mobile-sm:hidden tracking-tight"
  >
    <div
      class="flex text-[#7c7c7c] items-center desktop-xl:space-x-60 desktop-lg:space-x-32 md:space-x-24"
    >
      <div class="flex items-center gap-2">
        <a
          href="/informe-dominio/#como-pedirlo"
          class="hover:text-[#2E6CA4] duration-300 ease-in-out"
          >¿Cómo pedirlo?</a
        >
      </div>
      <div class="flex items-center">
        <a
          href="/informe-dominio/#que-incluye-dominio"
          class="hover:text-[#2E6CA4] duration-300 ease-in-out"
          >¿Qué incluye?</a
        >
      </div>
      <div class="flex items-center">
        <a
          href="/informe-dominio/#medios-de-pago"
          class="hover:text-[#2E6CA4] duration-300 ease-in-out"
          >Medios de Pago</a
        >
      </div>
    </div>
  </nav>
  <section
    class="desktop-xl:px-32 desktop-lg:px-10 h-full bg-[#D9D9D9] px-5 tablet-md:px-16 py-10 desktop-xl:py-0 tracking-tight"
    id="solicitar-informe"
  >
    <div class="desktop-xl:py-9">
      <h2
        class="text-[#7d7d7d] uppercase desktop-xl:text-4xl desktop-lg:text-2xl desktop-xl:py-10 text-xl font-medium underline underline-offset-4 decoration-[#2E6CA4]"
      >
        Informe de dominio
      </h2>
      <div
        class="sm:grid grid-cols-2 desktop-xl:px-40 md:px-4 md:py-4 desktop-xl:py-4"
      >
        <div>
          <h3
            class="desktop-xl:text-4xl desktop-lg:text-3xl md:text-xl desktop-lg:py-2 tablet-md:py-4 mobile-md:py-4 mobile-xs:py-4 mobile-sm:py-4 font-medium text-start tracking-tight text-[#424242] w-3/4 leading-snug"
          >
            Informes del automotor online, recibilos en pocas horas en tu email
          </h3>
        </div>
        <form
          @submit.prevent="submitReport"
          class="space-y-3 relative desktop-xl:bottom-12"
        >
          <div class="sm:grid grid-cols-2 relative mobile-md:right-12">
            <div
              class="relative h-11 desktop-lg:w-64 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-52 w-96 desktop-xl:min-w-[200px] mobile-md:w-48"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-200 focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="plate"
                v-model="formData.plate"
                required
              />
              <label
                for="plate"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Ingresa la patente</label
              >
            </div>
            <div
              class="relative h-11 desktop-lg:w-64 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-52 w-96 desktop-xl:min-w-[200px] mobile-md:w-48 mobile-md:left-10"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-200 focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                required
                autocomplete="off"
                id="name"
                v-model="formData.name"
              />
              <label
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                for="name"
                >Nombre</label
              >
            </div>
          </div>
          <div class="sm:grid grid-cols-2 relative mobile-md:right-12">
            <div
              class="relative h-11 desktop-lg:w-64 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-52 w-96 desktop-xl:min-w-[200px] mobile-md:w-48"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-200 focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="email"
                v-model="formData.email"
                required
              />
              <label
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                for="email"
                >Email</label
              >
            </div>
            <div
              class="relative h-11 desktop-lg:w-64 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-52 w-96 desktop-xl:min-w-[200px] mobile-md:w-48 mobile-md:left-10"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-200 focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="phone"
                v-model="formData.phone"
                required
              />
              <label
                for="phone"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Teléfono</label
              >
            </div>
          </div>
          <div class="max-w-lg py-6">
            <div class="relative mobile-md:right-12">
              <select
                id="reportType"
                v-model="selectedReportType"
                class="h-10 bg-transparent desktop-xl:w-[103%] md:w-full mobile-xs:w-72 mobile-sm:w-72 flex border-b border-[#7d7d7d] border-l-0 border-r-0 border-t-0 rounded items-center"
                required
              >
                <option disabled value="" class="text-gray-400 bg-[#D9D9D9]">
                  Seleccione un tipo de informe
                </option>
                <option
                  v-for="type in reportTypes"
                  :key="type.value"
                  :value="type.value"
                  class="bg-[#D9D9D9] text-gray-500"
                >
                  {{ type.label }} | Arancel ${{ type.price }}
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            class="desktop-xl:w-[88%] w-full bg-[#2E6CA4] hover:bg-[#296090] active:bg-[#225078] text-white rounded-full px-10 py-2 focus:outline-none focus:shadow-outline-blue-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </section>
  <component :is="HowToOrder" id="como-pedirlo"></component>
  <component :is="WhatIsIncludedReport" id="que-incluye-dominio"></component>
  <component :is="PaymentMethods" id="medios-de-pago"></component>
  <component :is="Footer" id="footer"></component>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useReportStore, ReportType } from '../store/report'
import {
  WhatIsIncludedReport,
  HowToOrder,
  PaymentMethods,
  Footer,
} from '../components'

const reportStore = useReportStore()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  plate: '',
  reportType: '',
  price: '',
})

const selectedReportType = ref('')

const reportTypes = [
  {
    value: ReportType.INFRINGEMENT,
    label: 'Informe de Infracciones',
    price: '3840',
  },
  { value: ReportType.DOMAIN, label: 'Informe de Dominio', price: '3840' },
  { value: ReportType.HISTORICAL, label: 'Informe Histórico', price: '3480' },
  {
    value: ReportType.DOMAIN_AND_INFRINGEMENT,
    label: 'Informe Dominio Histórico + Infracciones',
    price: '5840',
  },
]

const submitReport = async () => {
  try {
    formData.value.reportType = selectedReportType.value
    await reportStore.sendReport(formData.value)

    formData.value.name = ''
    formData.value.email = ''
    formData.value.phone = ''
    formData.value.plate = ''
    selectedReportType.value = ''
  } catch (error) {
    console.error(`Error sending report: ${error}`)
  }
}

watch(selectedReportType, (newValue) => {
  const selectedType = reportTypes.find((type) => type.value === newValue)
  if (selectedType) {
    formData.value.price = selectedType.price
  }
})
</script>
