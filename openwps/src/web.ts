import { WebPlugin } from '@capacitor/core';

import type { openwpsPlugin } from './definitions';

export class openwpsWeb extends WebPlugin implements openwpsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
