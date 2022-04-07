import { registerPlugin } from '@capacitor/core';

import type { openwpsPlugin } from './definitions';

const openwps = registerPlugin<openwpsPlugin>('openwps', {
  web: () => import('./web').then(m => new m.openwpsWeb()),
});

export * from './definitions';
export { openwps };
