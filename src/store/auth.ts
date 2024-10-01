import { defineStore } from 'pinia';
import axios from 'axios';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post(`${VITE_BASE_URL}/auth/login`, {
          email,
          password,
        });

        const { token, user } = response.data;

        localStorage.setItem('token', token);

        this.isLoggedIn = true;
        this.user = user;
        this.token = token;
      } catch (error) {
        console.error(`Error logging in: ${error}`);
        throw error;
      }
    },
    async logout() {
      try {
        await axios.post(`${VITE_BASE_URL}/auth/logout`);

        localStorage.removeItem('token');

        this.isLoggedIn = false;
        this.user = null;
        this.token = null;
      } catch (error) {
        console.error(`Error logging out: ${error}`);
        throw error;
      }
    },
  },
});
