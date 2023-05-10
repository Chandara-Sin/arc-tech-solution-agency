import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const httpClient = axios.create({ baseURL });

export { httpClient };
