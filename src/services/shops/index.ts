import { ShopSearchResult } from 'models/ShopSearchResult';
import { axiosInstance } from 'services';

type FetchShopsParams = {
  lat: string;
  lon: string;
};

export const fetchShops = async ({
  lat,
  lon
}: FetchShopsParams): Promise<ShopSearchResult[]> => {
  const shopUniverseQueryParam = `shop_universe_id=${CONFIG.shopUniverse}`;
  const geoLatitudeQueryParam = `geo_latitude=${lat}`;
  const geoLongitudeQueryParam = `geo_longitude=${lon}`;
  const geoDistanceQueryParam = `geo_distance=2km`;
  const limitQueryParam = `limit=10`;
  // const locationText = `locationText=Shinjuku`;

  const result = await axiosInstance.get(
    `shop_search?${shopUniverseQueryParam}&${geoLatitudeQueryParam}&${geoLongitudeQueryParam}&${geoDistanceQueryParam}&${limitQueryParam}`
  );

  return result.data.shops;
};
