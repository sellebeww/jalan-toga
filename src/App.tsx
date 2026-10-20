/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { AppShell } from './components/shell/AppShell';
import { appStore } from './lib/store';
import { applyTheme, watchSystemTheme } from './lib/theme';

export default function App() {
  useEffect(() => {
    applyTheme(appStore.getState().themePref);
    appStore.touchActivity();
    return watchSystemTheme(() => appStore.getState().themePref);
  }, []);

  return <AppShell />;
}
