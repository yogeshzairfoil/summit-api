import { greetUser } from '$utils/greet';

import { getEvents } from './api/methods';
import type { CMSList } from './types/CMSList';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const name = 'John Doe';
  greetUser(name);
  const data = await getEvents();
  console.log(data);
});
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  (listInstances: CMSList[]) => {
    const [listInstance] = listInstances;
    console.log(listInstance);
    const [item] = listInstance.items;
    const itemTemplateElement = item.element;
  },
]);
