import { getAllSpeakers } from '$utils/getAllSpeakers';
import { greetUser } from '$utils/greet';

import { getEvents } from './api/methods';
import type { CMSList } from './types/CMSList';

window.Webflow ||= [];
window.fsAttributes = window.fsAttributes || [];

window.Webflow.push(async () => {
  const name = 'John Doe';
  greetUser(name);
  const data = await getEvents();
  console.log(data);

  // Pushing custom code into FS cms attribute
  window.fsAttributes.push([
    'cmsload',
    async (listInstances: CMSList[]) => {
      // Fetching the speakers CMS List instance
      const [listInstance] = listInstances;
      console.log(listInstance);
      const [item] = listInstance.items;

      // Cloning the speaker template item
      const itemTemplateElement = item.element;

      // getting all speakers data
      const allSpeakers = await getAllSpeakers();
    },
  ]);
});
