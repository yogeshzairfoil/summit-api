import { getEvents } from 'src/api/methods';

export const getAllSpeakers = () => {
  const { data } = getEvents();
  const allEventsIds = data.map();
};
