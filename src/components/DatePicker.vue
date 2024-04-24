<template>
  <section
    class="desktop-xl:px-32 pb-36 desktop-lg:px-10 px-5 tablet-md:px-16 pt-10 desktop-xl:pt-0 tracking-tight"
  >
    <div class="desktop-xl:px-80 desktop-lg:px-48 tablet-md:px-20 md:px-10">
      <div
        class="rounded-lg shadow-lg border-2 border-[#cacaca56] desktop-xl:py-10 py-5"
      >
        <div
          class="desktop-xl:px-20 desktop-lg:px-14 md:px-10 mobile-xs:px-2 mobile-sm:px-2 desktop-xl:pb-16 pb-10"
        >
          <h3 class="desktop-xl:text-2xl text-lg font-medium">¿Cuándo?</h3>
          <p class="text-md text-[#636363]">
            Elige una fecha y un rango horario para realizar la verificación a
            domicilio
          </p>
        </div>
        <div class="sm:grid grid-cols-2 desktop-xl:pb-4">
          <div
            class="desktop-xl:px-28 desktop-lg:px-20 tablet-md:px-16 md:px-12"
          >
            <VueDatePicker
              v-model="selectedDate"
              inline
              auto-apply
              :highlight="highlightedDates"
              :min-date="minDate"
              :max-date="maxDate"
              :disabled-week-days="[6, 0]"
              :disabled-dates="disabledDates"
              @date-update="onDateSelected"
              :calendar-class-name="'lg:w-80 lg:min-w-[200px] py-2'"
              :calendar-cell-class-name="'ml-1'"
            >
              <template #calendar-header="{ index, day }">
                <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                  {{ day }}
                </div>
              </template>
            </VueDatePicker>
          </div>
          <div
            class="desktop-xl:px-20 sm:relative desktop-lg:left-1 md:px-10 mobile-xs:px-14 mobile-xs:mt-4 mobile-sm:mt-4 mobile-sm:px-16 mobile-sm:ml-2 md:left-4 tablet-md:left-6"
          >
            <ul v-if="availableSlots.length" class="grid grid-cols-2 gap-y-4">
              <li v-for="slot in availableSlots" :key="slot._id" class="mb-2">
                <button
                  @click="onTimeSelect(slot.startTime)"
                  :class="{ selected: slot.startTime === selectedTime }"
                  class="rounded-lg border-2 border-[#2E6CA4] desktop-xl:py-2 desktop-xl:px-4 desktop-lg:py-2 desktop-lg:px-4 md:py-2 md:px-1 mobile-xs:py-2 mobile-xs:px-1 mobile-sm:py-2 mobile-sm:px-1 hover:bg-[#6d9dc7]"
                >
                  {{ slot.startTime }} - {{ slot.endTime }}
                </button>
              </li>
            </ul>
            <p v-else>
              No hay horarios disponibles para la fecha seleccionada.
            </p>
          </div>
        </div>
      </div>
      <form
        v-if="selectedTime"
        @submit.prevent="scheduleAppointment"
        class="py-10"
      >
        <div
          class="rounded-lg shadow-lg border-2 border-[#cacaca56] w-full py-10"
        >
          <h3
            class="desktop-xl:text-2xl text-lg font-medium md:px-20 mobile-xs:px-2 mobile-sm:px-2 relative desktop-xl:left-0.5"
          >
            ¿Donde?
          </h3>
          <p
            class="text-md text-[#636363] md:px-20 mb-5 mobile-xs:px-2 mobile-sm:px-2"
          >
            Elige una localidad para realizar la verificación e ingresa la
            dirección exacta
          </p>
          <div
            class="lg:grid grid-cols-2 gap-6 md:px-20 mobile-xs:px-4 mobile-sm:px-10"
          >
            <div class="relative h-11 min-w-[200px] pt-1">
              <select
                id="location"
                class="h-10 desktop-xl:w-96 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 mobile-md:w-96 bg-transparent flex border-b border-[#7d7d7d] border-l-0 border-r-0 border-t-0 rounded"
                v-model="formData.location"
                required
              >
                <option disabled value="">Selecciona una localidad</option>
                <optgroup
                  v-for="area in areas"
                  :label="area.name"
                  :key="area.name"
                >
                  <option v-for="subarea in area.subareas" :key="subarea">
                    {{ area.name }} / {{ subarea }}
                  </option>
                </optgroup>
              </select>
            </div>
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="address"
                v-model="formData.address"
                required
              />
              <label
                for="address"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Dirección exacta</label
              >
            </div>
          </div>
        </div>
        <div
          class="rounded-lg shadow-lg border-2 border-[#cacaca56] w-full py-10 mt-10"
        >
          <h3
            class="desktop-xl:text-2xl text-lg font-medium md:px-20 mobile-xs:px-2 mobile-sm:px-2 relative desktop-xl:left-0.5"
          >
            Ingresa tus datos
          </h3>
          <p
            class="text-md text-[#636363] md:px-20 mb-5 mobile-xs:px-2 mobile-sm:px-2"
          >
            Ingresa tus datos y los datos del vehículo a verificar
          </p>
          <div
            class="lg:grid grid-cols-2 gap-6 md:px-20 mobile-xs:px-4 mobile-sm:px-10"
          >
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="name"
                v-model="formData.name"
                required
              />
              <label
                for="name"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Nombre</label
              >
            </div>
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="email"
                v-model="formData.email"
                required
              />
              <label
                for="email"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Email</label
              >
            </div>
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
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
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500 uppercase"
                placeholder=" "
                autocomplete="off"
                id="plate"
                v-model="formData.plate"
                required
              />
              <label
                for="plate"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Patente</label
              >
            </div>

            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="brand"
                v-model="formData.brand"
                required
              />
              <label
                for="brand"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Marca</label
              >
            </div>

            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <input
                class="peer h-full w-full border-b border-[#7d7d7d] bg-transparent pt-4 pb-1.5 text-md font-normal text-gray-700 outline outline-0 transition-all focus:border-[#2E6CA4] focus:outline-0 disabled:border-0 disabled:bg-transparent required:peer-invalid:border-red-500"
                placeholder=" "
                autocomplete="off"
                id="model"
                v-model="formData.model"
                required
              />
              <label
                for="model"
                class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#2E6CA4] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#2E6CA4] peer-focus:after:scale-x-100 peer-focus:after:border-[#2E6CA4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500 uppercase"
                >Modelo</label
              >
            </div>
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <select
                class="h-10 desktop-xl:w-96 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 mobile-md:w-96 bg-transparent flex border-b border-[#7d7d7d] border-l-0 border-r-0 border-t-0 rounded"
                id="fuelType"
                v-model="formData.fuelType"
                required
              >
                <option disabled value="">
                  Selecciona un tipo de combustible
                </option>
                <option value="GASOLINE">Gasolina</option>
                <option value="DIESEL">Diesel</option>
                <option value="GNC">GNC</option>
              </select>
            </div>
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <select
                class="h-10 desktop-xl:w-96 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 mobile-md:w-96 bg-transparent flex border-b border-[#7d7d7d] border-l-0 border-r-0 border-t-0 rounded"
                id="sellerType"
                v-model="formData.sellerType"
                required
              >
                <option disabled value="">
                  Selecciona un tipo de vendedor
                </option>
                <option value="PARTICULAR">Particular</option>
                <option value="AGENCY">Agencia</option>
              </select>
            </div>
            <div
              class="relative h-11 desktop-lg:w-72 mobile-xs:w-72 mobile-sm:w-72 tablet-md:w-64 w-96 min-w-[200px] mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4 desktop-xl:pt-1"
            >
              <select
                class="h-10 bg-transparent flex border-b border-[#7d7d7d] border-l-0 border-r-0 border-t-0 rounded"
                id="year"
                v-model="formData.year"
                required
              >
                <option disabled value="">Selecciona un año</option>
                <option v-for="year in years" :key="year">{{ year }}</option>
              </select>
            </div>
            <div
              class="flex items-center gap-4 mobile-xs:mt-4 mobile-sm:mt-4 mobile-md:mt-4"
            >
              <label for="willAttend">¿Vas a asistir?</label>
              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="willAttendYes"
                  :value="true"
                  v-model="formData.willAttend"
                />
                <label for="willAttendYes">Sí</label>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-2"></div>
                <input
                  type="radio"
                  id="willAttendNo"
                  :value="false"
                  v-model="formData.willAttend"
                />
                <label for="willAttendNo">No</label>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-[#2E6CA4] hover:bg-[#296090] active:bg-[#225078] text-white rounded-lg py-2 mt-5 focus:outline-none px-4 focus:shadow-outline-blue-500"
          >
            Agendar Visita
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useAvailabilityStore } from '../store/availability'
import { useAppointmentStore, FuelType, SellerType } from '../store/appointment'
import { areas, years } from '../utils/consts'

const selectedDate = ref(new Date())
const selectedTime = ref('')
const selectedYear = ref('')
const highlightedDates = ref([])
const availableSlots = ref([])
const disabledDates = ref([])
const minDate = new Date()
const maxDate = new Date()
maxDate.setDate(maxDate.getDate() + 60)

const formData = ref({
  date: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  location: '',
  plate: '',
  fuelType: FuelType.GASOLINE,
  sellerType: SellerType.PARTICULAR,
  brand: '',
  model: '',
  year: selectedYear.value,
  willAttend: false,
})

const availabilityStore = useAvailabilityStore()
const appointmentStore = useAppointmentStore()

onMounted(async () => {
  try {
    await availabilityStore.getAvailableDates()
    highlightedDates.value = availabilityStore.availableDates

    let initialDate = selectedDate.value

    if (initialDate.getDay() === 0 || initialDate.getDay() === 6) {
      initialDate = findNextAvailableWeekday(initialDate)
      selectedDate.value = initialDate
    }

    const disabled = await availabilityStore.getDisabledDates()
    disabledDates.value = disabled.map((date) => {
      const [year, month, day] = date.split('-')
      return new Date(year, month - 1, day)
    })

    await onDateSelected(selectedDate.value)
  } catch (error) {
    console.error(`Error getting available dates: ${error}`)
  }
})

const isDateAvailable = (date) => {
  const formattedDate = formatDate(date)
  return !disabledDates.value.includes(formattedDate)
}

const findNextAvailableWeekday = (date) => {
  let nextDate = new Date(date)

  while (
    !isDateAvailable(nextDate) ||
    nextDate.getDay() === 0 ||
    nextDate.getDay() === 6
  ) {
    nextDate.setDate(nextDate.getDate() + 1)
  }
  return nextDate
}

const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const onDateSelected = async (date) => {
  try {
    selectedDate.value = date
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    const slots = await availabilityStore.getAvailableSlots(formattedDate)
    availableSlots.value = slots
  } catch (error) {
    console.error(`Error getting available slots: ${error}`)
  }
}

const onTimeSelect = (time) => {
  selectedTime.value = time
}

const scheduleAppointment = async () => {
  try {
    const selectedDateOnly = selectedDate.value.toISOString().split('T')[0]
    formData.value.date = selectedDateOnly
    formData.value.time = selectedTime.value

    await appointmentStore.createAppointment(formData.value)

    formData.value.date = ''
    formData.value.time = ''
    formData.value.name = ''
    formData.value.email = ''
    formData.value.phone = ''
    formData.value.address = ''
    formData.value.location = ''
    formData.value.plate = ''
    formData.value.fuelType = FuelType.GASOLINE
    formData.value.sellerType = SellerType.PARTICULAR
    formData.value.brand = ''
    formData.value.model = ''
    formData.value.year = ''
    formData.value.willAttend = false
  } catch (error) {
    console.error(`Error scheduling appointment: ${error}`)
  }
}
</script>

<style>
.red-color {
  color: rgb(255, 80, 80);
}

.selected {
  background-color: #2e6da497;
}

.dp__theme_light {
  --dp-primary-color: #2e6ca4;
  --dp-primary-disabled-color: #2e6ca4;
  --dp-scroll-bar-color: #a1a1a1;
}

.dp--tp-wrap {
  display: none;
}
</style>
