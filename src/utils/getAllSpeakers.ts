import { getEvents, getSpeakers } from 'src/api/methods';
import type { components } from 'src/types/api';

export const getAllSpeakers = async () => {
  // querying all events
  const allEvents = await getEvents();

  // Making a list of all event ids
  const allEventIds = allEvents.data?.map((event) => event.id);

  // Making a request for speakers for each event ID
  const speakersPromises = allEventIds?.map((eventId) => getSpeakers(eventId));

  if (!speakersPromises) return [];
  // Resolving all promises with Promise.all()
  const allSpeakers = await Promise.all(speakersPromises);

  // Flattening the array of arrays into a single array
  const flattenedSpeakers = allSpeakers.flat();

  return flattenedSpeakers;
};
