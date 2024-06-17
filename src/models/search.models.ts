export interface SearchConfiguration {
  endDate: string;
  beginDate: string;
  region: string;
}

export interface SearchConfigurationState {
  searchConfiguration: SearchConfiguration;
  setSearchConfiguration: (searchConfiguration: SearchConfiguration) => void;
}
