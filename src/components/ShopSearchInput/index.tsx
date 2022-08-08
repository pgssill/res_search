import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { useSearchInput } from './hooks/useSearchInput';
import {
  SearchInputWrapper,
  SearchResult,
  SearchInput,
  SearchResultsWrapper
} from './styles';

type Props = {
  initialSearchQuery?: string | null;
};

export function ShopSearchInput({ initialSearchQuery }: Props): JSX.Element {
  const { searchQuery, setSearchQuery, searchResults } = useSearchInput();
  const [t, { language }] = useTranslation();

  const handleSearchOnChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(target.value);

  const results = searchResults.map((location) => {
    const {
      text,
      payload: { geo, term }
    } = location;

    const queryParams = `?lat=${geo.lat}&lon=${geo.lon}&searchQuery=${term}`;

    return (
      <SearchResult
        key={geo.lat + geo.lon}
        to={`/${language}/shops/${queryParams}`}
      >
        {text}
      </SearchResult>
    );
  });

  return (
    <SearchInputWrapper data-testid="search-input">
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleSearchOnChange}
        placeholder={
          initialSearchQuery ?? t('attributes.pages.search_placeholder')
        }
      />

      <SearchResultsWrapper
        onClick={() => {
          setSearchQuery('');
        }}
      >
        {results}
      </SearchResultsWrapper>
    </SearchInputWrapper>
  );
}
