<template>
  <div class="p-4 xl:ml-60">
    <div
      class="mb-12 grid gap-y-10 gap-x-6 xl:gap-y-20 xl:gap-x-10 xl:px-80 xl:pt-20 md:grid-cols-2 xl:grid-cols-2 mt-20"
    >
      <div
        class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
      >
        <div
          class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-6 h-6 text-white"
          >
            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
            <path
              fill-rule="evenodd"
              d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
              clip-rule="evenodd"
            ></path>
            <path
              d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"
            ></path>
          </svg>
        </div>
        <div class="px-4 text-right">
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            En esta sección podrás
          </p>
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            modificar los precios de tu negocio
          </p>
        </div>
        <div class="border-t border-blue-gray-50 p-4 mt-14">
          <router-link
            to="/dashboard/precios"
            class="text-blue-gray-700 hover:text-blue-500 flex justify-between"
            active-class="font-bold"
          >
            <span
              class="antialiased font-sans text-md leading-normal font-bold text-blue-gray-600"
            >
              Modificar precios
            </span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 4V20M8 12H20M20 12L16 8M20 12L16 16"
                  stroke="#8c8c8c"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </router-link>
        </div>
      </div>

      <div
        class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
      >
        <div
          class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-6 h-6 text-white"
          >
            <path
              d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
            ></path>
          </svg>
        </div>
        <div class="px-4 text-right">
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            En esta sección podrás ver y
          </p>
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            gestionar las visitas de tus clientes
          </p>
        </div>
        <div class="border-t border-blue-gray-50 p-4 mt-14">
          <router-link
            to="/dashboard/visitas"
            class="text-blue-gray-700 hover:text-blue-500 flex justify-between"
            active-class="font-bold"
          >
            <span
              class="antialiased font-sans text-md leading-normal font-bold text-blue-gray-600"
            >
              Gestionar visitas
            </span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 4V20M8 12H20M20 12L16 8M20 12L16 16"
                  stroke="#8c8c8c"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </router-link>
        </div>
      </div>
      <div
        class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
      >
        <div
          class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-6 h-6 text-white"
          >
            <path
              d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"
            ></path>
          </svg>
        </div>
        <div class="px-4 text-right">
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            En esta sección podrás ver y
          </p>
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            generar disponibilidad de turnos
          </p>
        </div>
        <div class="border-t border-blue-gray-50 p-4 mt-14">
          <router-link
            to="/dashboard/disponibilidad"
            class="text-blue-gray-700 hover:text-blue-500 flex justify-between"
            active-class="font-bold"
          >
            <span
              class="antialiased font-sans text-md leading-normal font-bold text-blue-gray-600"
            >
              Gestionar disponibilidad
            </span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 4V20M8 12H20M20 12L16 8M20 12L16 16"
                  stroke="#8c8c8c"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </router-link>
        </div>
      </div>
      <div
        class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
      >
        <div
          class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-6 h-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="px-4 text-right">
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            En esta sección podrás ver y
          </p>
          <p
            class="block antialiased font-sans text-sm text-wrap leading-relaxed font-normal text-blue-gray-600"
          >
            los datos de tu perfil
          </p>
        </div>
        <div class="border-t border-blue-gray-50 p-4 mt-14">
          <router-link
            to="/dashboard/inicio"
            class="text-blue-gray-700 hover:text-blue-500 flex justify-between"
            active-class="font-bold"
          >
            <span
              class="antialiased font-sans text-md leading-normal font-bold text-blue-gray-600"
            >
              Ver mi perfil
            </span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 4V20M8 12H20M20 12L16 8M20 12L16 16"
                  stroke="#8c8c8c"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter, RouterView } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import { VerificationType, usePriceStore } from '@/store/price';

const authStore = useAuthStore();
const priceStore = usePriceStore();
const router = useRouter();

const errorMessage = ref('');
const successMessage = ref('');

const handleLogout = async () => {
  try {
    await authStore.logout();
    router.push({ name: 'login' });
  } catch (error) {
    console.error(`Error logging out: ${error}`);
  }
};
</script>
