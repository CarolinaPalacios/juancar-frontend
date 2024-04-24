<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { FwbInput } from 'flowbite-vue'
import { Eye, EyeSlash } from '@iconsans/vue/bold'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const showPassword = ref(false)
const authStore = useAuthStore()

const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value)
    errorMessage.value = ''
    console.log('Logged in')
  } catch (error) {
    errorMessage.value =
      'Credenciales inválidas, Por favor, inténtalo de nuevo.'
  }
}

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}
</script>
<template>
  <div class="flex min-h-screen items-center justify-center tracking-tight">
    <div
      class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
    >
      <h4
        class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
      >
        Inicia sesión
      </h4>
      <p
        class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
      >
        Por favor, introduce tus credenciales.
      </p>
      <form
        @submit.prevent="handleLogin"
        class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 border border-gray-200 p-4 rounded-md focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-200"
      >
        <div class="mb-4 flex flex-col gap-4">
          <fwb-input
            v-model="email"
            required
            label="Email"
            placeholder="mail@example.com"
            type="email"
            :validation-status="errorMessage ? 'error' : 'success'"
            class="h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-t-transparent focus:outline-0"
          >
          </fwb-input>
          <fwb-input
            v-model="password"
            required
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Introduce tu contraseña"
            :validation-status="errorMessage ? 'error' : 'success'"
            class="h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-t-transparent focus:outline-0"
          >
            <template #suffix>
              <button
                @click="toggleShowPassword"
                class="h-5 w-5 relative top-1"
                type="button"
              >
                <component
                  :is="showPassword ? Eye : EyeSlash"
                  class="h-5 w-5 text-gray-700"
                />
              </button>
            </template>
            <template
              v-if="errorMessage"
              #validationMessage
              class="absolute left-0 bottom-full"
            >
              {{ errorMessage }}
            </template>
          </fwb-input>

          <button
            type="submit"
            class="mt-6 block w-full select-none rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
