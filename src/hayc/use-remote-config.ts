import {
  siteConfig,
  digitalProductsConfig,
  navigationConfig,
  footerConfig,
  homePageConfig,
  aboutPageConfig,
  contactPageConfig,
  type DigitalProductsConfig,
  type NavigationConfig,
  type FooterConfig,
  type HomePageConfig,
  type AboutPageConfig,
  type ContactPageConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  digitalProductsConfig?: DigitalProductsConfig;
  navigationConfig: NavigationConfig;
  footerConfig: FooterConfig;
  homePageConfig: HomePageConfig;
  aboutPageConfig: AboutPageConfig;
  contactPageConfig: ContactPageConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  digitalProductsConfig,
  navigationConfig,
  footerConfig,
  homePageConfig,
  aboutPageConfig,
  contactPageConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  // In development, use config.ts directly for instant updates
  if (import.meta.env.DEV) {
    return defaultConfig;
  }

  // In production, fetch from remote config.json
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = (await res.json()) as Partial<RemoteConfig>;
    return {
      ...defaultConfig,
      ...data,
      navigationConfig: data.navigationConfig ?? defaultConfig.navigationConfig,
      footerConfig: data.footerConfig ?? defaultConfig.footerConfig,
      homePageConfig: data.homePageConfig ?? defaultConfig.homePageConfig,
      aboutPageConfig: data.aboutPageConfig ?? defaultConfig.aboutPageConfig,
      contactPageConfig: {
        ...defaultConfig.contactPageConfig,
        ...(data.contactPageConfig ?? {}),
      },
    };
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}
