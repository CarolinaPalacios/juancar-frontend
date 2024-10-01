<template>
  <div class="bg-white p-8 rounded-md w-[80%] xl:ml-[20rem]">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">Lista de Visitas</h2>
        <span class="text-xs">Todas las visitas</span>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            v-model="searchTerm"
            class="bg-gray-50 outline-none ml-2 block rounded-md"
            type="text"
            placeholder="Buscar..."
            @input="fetchAppointments"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Nombre
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Dirección
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Correo
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Fecha
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Teléfono
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Tipo de vendedor
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="appointment in appointmentStore.appointments"
                :key="appointment._id"
              >
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ appointment.name }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ appointment.address }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ appointment.email }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ appointment.date.split('T')[0] }} -
                    {{ appointment.time }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ appointment.phone }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    :class="{
                      'text-green-900 bg-green-200':
                        appointment.sellerType === 'PARTICULAR',
                      'text-orange-900 bg-orange-200':
                        appointment.sellerType === 'AGENCY',
                    }"
                    class="relative inline-block px-3 py-1 font-semibold leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">{{ appointment.sellerType }}</span>
                  </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button @click="confirmDelete(appointment._id)" class="ml-6">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.3094 2.25002H13.6908C13.9072 2.24988 14.0957 2.24976 14.2737 2.27819C14.977 2.39049 15.5856 2.82915 15.9146 3.46084C15.9978 3.62073 16.0573 3.79961 16.1256 4.00494L16.2373 4.33984C16.2562 4.39653 16.2616 4.41258 16.2661 4.42522C16.4413 4.90933 16.8953 5.23659 17.4099 5.24964C17.4235 5.24998 17.44 5.25004 17.5001 5.25004H20.5001C20.9143 5.25004 21.2501 5.58582 21.2501 6.00004C21.2501 6.41425 20.9143 6.75004 20.5001 6.75004H3.5C3.08579 6.75004 2.75 6.41425 2.75 6.00004C2.75 5.58582 3.08579 5.25004 3.5 5.25004H6.50008C6.56013 5.25004 6.5767 5.24998 6.59023 5.24964C7.10488 5.23659 7.55891 4.90936 7.73402 4.42524C7.73863 4.41251 7.74392 4.39681 7.76291 4.33984L7.87452 4.00496C7.94281 3.79964 8.00233 3.62073 8.08559 3.46084C8.41453 2.82915 9.02313 2.39049 9.72643 2.27819C9.90445 2.24976 10.093 2.24988 10.3094 2.25002ZM9.00815 5.25004C9.05966 5.14902 9.10531 5.04404 9.14458 4.93548C9.1565 4.90251 9.1682 4.86742 9.18322 4.82234L9.28302 4.52292C9.37419 4.24941 9.39519 4.19363 9.41601 4.15364C9.52566 3.94307 9.72853 3.79686 9.96296 3.75942C10.0075 3.75231 10.067 3.75004 10.3553 3.75004H13.6448C13.9331 3.75004 13.9927 3.75231 14.0372 3.75942C14.2716 3.79686 14.4745 3.94307 14.5842 4.15364C14.605 4.19363 14.626 4.2494 14.7171 4.52292L14.8169 4.82216L14.8556 4.9355C14.8949 5.04405 14.9405 5.14902 14.992 5.25004H9.00815Z"
                          fill="#525252"
                        ></path>
                        <path
                          d="M5.91509 8.45015C5.88754 8.03685 5.53016 7.72415 5.11686 7.7517C4.70357 7.77925 4.39086 8.13663 4.41841 8.54993L4.88186 15.5017C4.96736 16.7844 5.03642 17.8205 5.19839 18.6336C5.36679 19.4789 5.65321 20.185 6.2448 20.7385C6.8364 21.2919 7.55995 21.5308 8.4146 21.6425C9.23662 21.7501 10.275 21.7501 11.5606 21.75H12.4395C13.7251 21.7501 14.7635 21.7501 15.5856 21.6425C16.4402 21.5308 17.1638 21.2919 17.7554 20.7385C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9638 17.8206 19.0328 16.7844 19.1183 15.5017L19.5818 8.54993C19.6093 8.13663 19.2966 7.77925 18.8833 7.7517C18.47 7.72415 18.1126 8.03685 18.0851 8.45015L17.6251 15.3493C17.5353 16.6971 17.4713 17.6349 17.3307 18.3406C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8989 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8989 7.26958 19.6431C6.99617 19.3873 6.80583 19.025 6.66948 18.3406C6.52892 17.6349 6.46489 16.6971 6.37503 15.3493L5.91509 8.45015Z"
                          fill="#525252"
                        ></path>
                        <path
                          d="M9.42546 10.2538C9.83762 10.2125 10.2052 10.5133 10.2464 10.9254L10.7464 15.9254C10.7876 16.3376 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29503 16.4868 9.25381 16.0747L8.75381 11.0747C8.7126 10.6625 9.01331 10.295 9.42546 10.2538Z"
                          fill="#525252"
                        ></path>
                        <path
                          d="M14.5747 10.2538C14.9869 10.295 15.2876 10.6625 15.2464 11.0747L14.7464 16.0747C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3376 13.2538 15.9254L13.7538 10.9254C13.795 10.5133 14.1626 10.2125 14.5747 10.2538Z"
                          fill="#525252"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Mostrando {{ (currentPage - 1) * limit + 1 }} de
              {{ Math.min(currentPage * limit, total) }} de
              {{ total }} registros
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm text-indigo-50 transition duration-150 hover:bg-[#5691c5] bg-[#2E6CA4] font-semibold py-2 px-4 rounded-l cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
                @click="previousPage"
                :disabled="currentPage === 1"
              >
                Anterior
              </button>
              <button
                class="text-sm text-indigo-50 transition duration-150 hover:bg-[#5691c5] bg-[#2E6CA4] font-semibold py-2 px-4 rounded-r cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
                @click="nextPage"
                :disabled="currentPage * limit >= total"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showModal"
        class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      >
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div
          class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div class="">
            <div class="text-center p-5 flex-auto justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 flex items-center text-red-500 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <h2 class="text-xl font-bold py-4">¿Estás seguro?</h2>
              <p class="text-sm text-gray-500 px-8">
                ¿Realmente deseas eliminar este registro? Este proceso no se
                puede deshacer.
              </p>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                @click="cancelDelete"
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                @click="deleteAppointment"
                class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAppointmentStore } from '@/store/appointment';

const appointmentStore = useAppointmentStore();
const searchTerm = ref('');
const currentPage = ref(1);
const limit = ref(10);
const total = ref(0);
const showModal = ref(false);
const appointmentToDelete = ref(null);

const fetchAppointments = async () => {
  await appointmentStore.getAppointments(
    searchTerm.value,
    currentPage.value,
    limit.value
  );
  total.value = appointmentStore.total;
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchAppointments();
  }
};

const nextPage = () => {
  if (currentPage.value * limit.value < total.value) {
    currentPage.value++;
    fetchAppointments();
  }
};

const confirmDelete = (id) => {
  appointmentToDelete.value = id;
  showModal.value = true;
};

const cancelDelete = () => {
  showModal.value = false;
  appointmentToDelete.value = null;
};

const deleteAppointment = async () => {
  if (appointmentToDelete.value) {
    await appointmentStore.deleteAppointment(appointmentToDelete.value);
    fetchAppointments();
    showModal.value = false;
  }
};

onMounted(() => {
  fetchAppointments();
});
</script>
