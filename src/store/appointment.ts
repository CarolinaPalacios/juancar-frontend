import { defineStore } from 'pinia'
import axios from 'axios'
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

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
  date: string
  time: string
  name: string
  email: string
  phone: string
  address: string
  location: string
  plate: string
  fuelType: string
  sellerType: string
  brand: string
  model: string
  year: string
  willAttend: boolean
}

export const useAppointmentStore = defineStore('appointment', {
  actions: {
    async createAppointment(appointment: Appointment) {
      try {
        const response = await axios.post(
          `${VITE_BASE_URL}/appointments`,
          appointment
        )
        window.open(response.data.url, '_blank')
      } catch (error) {
        console.error(`Error creating appointment: ${error}`)
        throw error
      }
    },
  },
})
