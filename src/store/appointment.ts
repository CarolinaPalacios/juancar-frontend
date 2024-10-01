import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './auth';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export enum SellerType {
  AGENCY = 'AGENCY',
  PARTICULAR = 'PARTICULAR',
}

export enum FuelType {
  GASOLINE = 'GASOLINE',
  DIESEL = 'DIESEL',
  GNC = 'GNC',
}

export interface Appointment {
  _id?: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  plate: string;
  fuelType: FuelType;
  sellerType: SellerType;
  brand: string;
  model: string;
  year: string;
  reservationNumber?: string;
  willAttend: boolean;
}

export const useAppointmentStore = defineStore('appointment', {
  state: () => ({
    appointments: [] as Appointment[],
    appointment: {} as Appointment,
    isLoading: true,
    total: 0,
    limit: 10,
    currentPage: 1,
  }),
  actions: {
    async createAppointment(appointment: Appointment) {
      try {
        const response = await axios.post(
          `${VITE_BASE_URL}/appointments`,
          appointment
        );
        window.open(response.data.url, '_blank');
      } catch (error) {
        console.error(`Error creating appointment: ${error}`);
        throw error;
      }
    },

    async getAppointments(name?: string, page: number = 1, limit: number = 10) {
      try {
        const authStore = useAuthStore();
        const token = authStore.token;

        const response = await axios.get(
          `${VITE_BASE_URL}/appointments?name=${name}&page=${page}&limit=${limit}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        this.appointments = response.data.data;
        this.total = response.data.total;
        this.limit = limit;
        this.currentPage = page;
        this.isLoading = false;
      } catch (error) {
        console.error(`Error getting appointments: ${error}`);
        throw error;
      }
    },

    async getAppointment(id: string) {
      try {
        const authStore = useAuthStore();
        const token = authStore.token;

        const response = await axios.get(
          `${VITE_BASE_URL}/appointments/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.appointment = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error(`Error getting appointment: ${error}`);
        throw error;
      }
    },

    async updateAppointment(id: string, appointment: Partial<Appointment>) {
      try {
        const authStore = useAuthStore();
        const token = authStore.token;

        const response = await axios.patch(
          `${VITE_BASE_URL}/appointments/${id}`,
          appointment,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.appointment = response.data;
      } catch (error) {
        console.error(`Error updating appointment: ${error}`);
        throw error;
      }
    },

    async deleteAppointment(id: string) {
      try {
        const authStore = useAuthStore();
        const token = authStore.token;
        await axios.delete(`${VITE_BASE_URL}/appointments/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.appointments = this.appointments.filter(
          (a: Appointment) => a._id !== id
        );
        this.appointment = {} as Appointment;
      } catch (error) {
        console.error(`Error deleting appointment: ${error}`);
        throw error;
      }
    },
  },
});
