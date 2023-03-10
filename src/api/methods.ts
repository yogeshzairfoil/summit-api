/* eslint-disable no-console */
import type { components } from 'src/types/api';

import { api } from './api';

/**
 * Gets all the events
 */
export const getEvents = async (): Promise<components['schemas']['EventsList']> => {
  try {
    const response = await api.get('/events');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Gets all the speakers
 */
export const getSpeakers = async (
  eventId: number
): Promise<components['schemas']['SpeakersList']> => {
  try {
    const response = await api.get(`/events/${eventId}/speakers`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
