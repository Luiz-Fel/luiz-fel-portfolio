import axios from "axios";

const form = axios.create({
    baseURL: import.meta.env.VITE_FORM_URL,
})

export default form;