export type LocationResult = {
  text: string;
  type: string;
  payload: {
    location_type: string;
    term: string;
    area: string;
    geo: {
      lat: number;
      lon: number;
    };
  };
};

type ShopResult = {
  text: string;
  type: string;
  payload: {
    shop_slug: string;
  };
};

export type AutocompleteSearchResult = {
  locations: LocationResult[];
  shops: ShopResult[];
};
