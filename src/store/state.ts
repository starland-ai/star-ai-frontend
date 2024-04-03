import settings from '@/settings'

export interface State {
  debug: boolean;
  version: string;
  isInitialized: boolean;
  count: number;
  loading: boolean;
  language: string,
  userInfo: object | null
}

const versionString =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_APP_VERSION + "-dev"
    : import.meta.env.VITE_APP_VERSION;

export const state: State = {
  debug: import.meta.env.MODE === "development",
  version: versionString,
  isInitialized: false,
  count: 0,
  loading: false,
  language: settings.defaultLanguage,
  userInfo: null
};
