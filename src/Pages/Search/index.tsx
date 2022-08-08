import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Headline, PageWrapper } from 'Layouts';

import { ShopSearchInput } from '../../components/ShopSearchInput';

import { useSearch } from './hooks/useSearch';

export function Search(): JSX.Element {
  const [t, { language }] = useTranslation();
  useSearch();

  return (
    <PageWrapper>
      <Headline>{t('attributes.titles.search')}</Headline>
      <h4>{t('attributes.pages.search_subheading')} </h4>

      <ShopSearchInput />

      <Helmet>
        <title lang={language}>{`${t('attributes.titles.shops')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </PageWrapper>
  );
}
