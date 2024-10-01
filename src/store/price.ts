import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './auth';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export enum VerificationType {
  VPA = 'VPA',
  VMA = 'VMA',
  VDA = 'VDA',
}

export const usePriceStore = defineStore('price', {
  state: () => ({
    prices: [],
    price: {
      id: '',
      verificationType: '',
      price: 0,
    },
    isLoading: true,
  }),
  actions: {
    async getPrices() {
      try {
        const { data } = await axios.get(`${VITE_BASE_URL}/price`);
        this.prices = data;
      } catch (error) {
        console.error(`Error getting prices: ${error}`);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async getPriceByVerificationType(verificationType: VerificationType) {
      try {
        const response = await axios.get(
          `${VITE_BASE_URL}/price/${verificationType}`
        );
        this.price = response.data;
      } catch (error) {
        console.error(`Error getting price: ${error}`);
        throw error;
      }
    },

    async updatePrice(id: string, price: number) {
      try {
        const authStore = useAuthStore();
        const token = authStore.token;

        const response = await axios.patch(
          `${VITE_BASE_URL}/price/${id}`,
          { price },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.price = response.data;
      } catch (error) {
        console.error(`Error updating price: ${error}`);
        throw error;
      }
    },
  },
});
