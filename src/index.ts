import { greetUser } from '$utils/greet';

import type { CMSList } from './types/CMSList';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
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
