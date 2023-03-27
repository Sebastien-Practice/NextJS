import axios from "axios";

const baseURL = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

export let data = axios.get(baseURL)