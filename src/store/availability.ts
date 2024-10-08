import { defineStore } from 'pinia';

import axios from 'axios';
import { useAuthStore } from '@/store/auth';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAvailabilityStore = defineStore('availability', {
  state: () => ({
    availableDates: [],
    availableSlots: [],
  }),
  actions: {
    async getAvailableDates() {
      try {
        const response = await axios.get(`${VITE_BASE_URL}/availability`);
        const { date } = response.data;
        this.availableDates = date;
      } catch (error) {
        console.error(`Error getting available dates: ${error}`);
        throw error;
      }
    },

    async getAvailableSlots(date: string) {
      try {
        const response = await axios.get(
          `${VITE_BASE_URL}/availability/${date}`
        );

        this.availableSlots = response.data;
        return response.data;
      } catch (error) {
        console.error(`Error getting available slots: ${error}`);
        throw error;
      }
    },

    async getDisabledDates() {
      try {
        const response = await axios.get(
          `${VITE_BASE_URL}/availability/disabled-dates`
        );
        return response.data;
      } catch (error) {
        console.error(`Error getting disabled dates: ${error}`);
        throw error;
      }
    },

    async generateAvailability() {
      try {
        const authStore = useAuthStore();
        const token = authStore.token;
        await axios.post(`${VITE_BASE_URL}/availability`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error(`Error generating availability: ${error}`);
        throw error;
      }
    },
  },
});
