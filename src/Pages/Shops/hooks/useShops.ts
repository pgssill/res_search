import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { ShopSearchResult } from 'models/ShopSearchResult';
import { fetchShops } from 'services/shops';

type UseShopsReturn = {
  shops: ShopSearchResult[];
  selectedShop?: ShopSearchResult;
  setSelectedShop: React.Dispatch<
    React.SetStateAction<ShopSearchResult | undefined>
  >;
  searchQuery: string | null;
};

export const useShops = (): UseShopsReturn => {
  const [shops, setShops] = React.useState<Array<ShopSearchResult>>([]);
  const [, { language }] = useTranslation();
  const [searchParams] = useSearchParams();
  const [selectedShop, setSelectedShop] = React.useState<
    ShopSearchResult | undefined
  >(undefined);

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const searchQuery = searchParams.get('searchQuery');

  React.useEffect(() => {
    if (!lat || !lon) {
      return;
    }

    setShops([]);
  }, [lat, lon]);

  React.useEffect(() => {
    if (!lat || !lon) {
      return;
    }

    const fetchData = async () => {
      setShops(
        await fetchShops({
          lat,
          lon
        })
      );
    };

    fetchData();
  }, [language, lat, lon]);

  return { shops, selectedShop, setSelectedShop, searchQuery };
};
