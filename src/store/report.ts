import { defineStore } from 'pinia'
import axios from 'axios'
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

interface Report {
  reportType: string
  name: string
  price: string
  plate: string
  phone: string
  email: string
}

export enum ReportType {
  INFRINGEMENT = 'Informe Infracciones',
  DOMAIN = 'Informe Dominio',
  HISTORICAL = 'Informe Histórico',
  DOMAIN_AND_INFRINGEMENT = 'Informe Dominio Histórico + Infracciones',
}

export const useReportStore = defineStore('report', {
  actions: {
    async sendReport(reportData: Report) {
      try {
        const response = await axios.post(
          `${VITE_BASE_URL}/reports`,
          reportData
        )
        window.open(response.data.url, '_blank')
      } catch (error) {
        console.error(`Error sending report: ${error}`)
        throw error
      }
    },
  },
})
