import {
  Configuration,
  DefaultApi,
  type ConfigurationParameters,
} from "./v3.0";

const getConfigAPI = (defaultConfig: ConfigurationParameters) => {
  return new Configuration({
    ...defaultConfig,
    apiKey: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  });
};

export const apiClient = (config?: ConfigurationParameters) => {
  const defaultConfig: ConfigurationParameters = {
    ...(config || {}),
  };
  const configAPI = getConfigAPI(defaultConfig);
  return new DefaultApi(configAPI);
};
