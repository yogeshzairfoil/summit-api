import { api } from './api';

export const getEvents = async () => {
  try {
    const response = await api.get('/events');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
