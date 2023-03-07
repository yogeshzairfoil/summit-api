import axios from 'axios';

import { BASE_URL, headers } from './constants';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: headers,
});
