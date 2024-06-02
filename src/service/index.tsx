import axios from "axios";

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
});

const api = axios.create({
  baseURL: import.meta.env.VITE_PROJECT_API_URL,
});

export { api, apiAuth };
