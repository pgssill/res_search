import * as React from 'react';
import { useDebounce } from 'react-use';

import { LocationResult } from 'models/AutocompleteSearchResult';
import { fetchLocation } from 'services/location';

type UseSearchInputReturn = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchResults: LocationResult[];
};

export const useSearchInput = (): UseSearchInputReturn => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<LocationResult[]>(
    []
  );

  useDebounce(
    async () => {
      if (searchQuery.length === 0) {
        setSearchResults([]);
        return;
      }

      setSearchResults((await fetchLocation(searchQuery)) || []);
    },
    500,
    [searchQuery]
  );

  React.useEffect(() => {
    if (searchQuery === '') {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults
  };
};
