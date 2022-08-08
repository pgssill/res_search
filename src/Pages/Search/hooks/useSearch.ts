import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchLocation } from 'services/location';

export const useSearch = (): void => {
  const [, { language }] = useTranslation();
  const navigate = useNavigate();
  const { searchParam } = useParams();

  if (!searchParam) {
    navigate(`/${language}/shops`);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      if (!searchParam || searchParam?.length === 0) {
        return navigate(`/${language}/shops`);
      }

      const results = await fetchLocation(searchParam);

      if (results.length === 0) {
        return navigate(`/${language}/shops`);
      }

      const {
        payload: { geo, term }
      } = results[0];

      const queryParams = `?lat=${geo.lat}&lon=${geo.lon}&searchQuery=${term}`;
      navigate(`/${language}/shops/${queryParams}`);
    };

    fetchData();
  }, [language, navigate, searchParam]);
};
