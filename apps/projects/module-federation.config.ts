import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'projects',
  exposes: {
    './Routes': 'apps/projects/src/app/remote-entry/entry.routes.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (libraryName === '@demo-workspace/shared') {
      return {
        singleton: true,
        strictVersion: false,
        requiredVersion: false,
      };
    }
    return defaultConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
