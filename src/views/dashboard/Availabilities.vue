<template>
  <div class="bg-white p-8 rounded-md w-[80%] xl:ml-[20rem]">
    <p class="text-gray-900 p-10">
      Esta funcionalidad genera disponibilidad en el turnero para dos meses
      desde la fecha actual. <br />
      Usar con precaución.
    </p>
    <div class="px-10">
      <button
        @click="generateAvailability"
        class="text-sm text-indigo-50 transition duration-150 hover:bg-[#5691c5] bg-[#2E6CA4] font-semibold py-2 px-4 rounded-md cursor-pointer"
      >
        Generar disponibilidad
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAvailabilityStore } from '@/store/availability';
const availabilityStore = useAvailabilityStore();

const generateAvailability = async () => {
  await availabilityStore.generateAvailability();
};
</script>
