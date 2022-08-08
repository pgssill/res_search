import {
  AutocompleteSearchResult,
  LocationResult
} from 'models/AutocompleteSearchResult';
import { axiosInstance } from 'services';

export const fetchLocation = async (
  location: string
): Promise<LocationResult[]> => {
  const shopUniverseQueryParam = `shop_universe_id=${CONFIG.shopUniverse}`;
  const textQueryParam = `text=${location}`;

  const result = await axiosInstance.get<AutocompleteSearchResult>(
    `autocomplete?${shopUniverseQueryParam}&${textQueryParam}`
  );

  return result.data.locations;
};
