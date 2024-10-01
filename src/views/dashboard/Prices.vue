<template>
  <div class="p-10">
    <div
      class="mb-12 grid gap-y-10 gap-x-6 xl:gap-y-20 xl:gap-x-10 xl:px-80 xl:pt-20 md:grid-cols-2 xl:grid-cols-2"
    >
      <div
        class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
        v-for="price in priceStore.prices"
        :key="price._id"
      >
        <div
          class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
        >
          <div
            class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-around p-6"
          >
            <div class="flex flex-col">
              <h3
                class="text-[#666565] uppercase desktop-xl:text-4xl desktop-lg:text-2xl font-medium text-xl"
              >
                {{ price.verificationType }}
              </h3>
              <p
                class="text-lg font-medium desktop-xl:text-3xl desktop-lg:text-2xl desktop-xl:pt-4 desktop-lg:pt-2"
              >
                ${{ price.price }}
              </p>
              <fwb-input
                v-model="formData[price._id]"
                type="number"
                placeholder="$0.00"
                label="Nuevo precio"
              />
            </div>
            <button
              class="text-white bg-[#2E6CA4] hover:bg-[#5691c5] font-medium rounded-lg text-sm px-5 py-2.5 mt-[7.5rem] text-center"
              @click="handleUpdatePrice(price._id)"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
      <fwb-toast
        v-if="successMessage"
        :message="successMessage.value"
        closable
        type="success"
        @close="successMessage.value = ''"
        class="absolute bottom-5 right-[50%] translate-x-[50%] text-black"
        >{{ successMessage }}</fwb-toast
      >
      <fwb-toast
        v-if="errorMessage"
        :message="errorMessage"
        type="error"
        @close="errorMessage = ''"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { FwbInput, FwbToast } from 'flowbite-vue';
import { VerificationType, usePriceStore } from '@/store/price';

const priceStore = usePriceStore();
const router = useRouter();

const errorMessage = ref('');
const successMessage = ref('');

const formData = ref({});

onMounted(async () => {
  try {
    await priceStore.getPrices();
  } catch (error) {
    console.error('Error cargando precios:', error);
  }
});

const handleUpdatePrice = async (id) => {
  try {
    const updatedPrice = formData.value[id];
    await priceStore.updatePrice(id, updatedPrice);

    successMessage.value = 'Precio actualizado correctamente';
    errorMessage.value = '';

    await priceStore.getPrices();

    formData.value[id] = '';
  } catch (error) {
    errorMessage.value = `Error al actualizar el precio: ${error.message}`;
  }
};
</script>
