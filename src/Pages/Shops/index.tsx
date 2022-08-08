import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Headline, PageWrapper } from 'Layouts';
import { ShopSearchInput } from 'components/ShopSearchInput';

import { ShopGrid } from './components/ShopGrid';
import { ShopItem } from './components/ShopItem/ShopItem';
import { ShopItemDetails } from './components/ShopItemDetails';
import { useShops } from './hooks/useShops';

export function Shops(): JSX.Element {
  const [t, { language }] = useTranslation();
  const { shops, setSelectedShop, selectedShop, searchQuery } = useShops();

  return (
    <PageWrapper>
      <Headline>{t('attributes.titles.shops')}</Headline>

      <ShopSearchInput initialSearchQuery={searchQuery} />

      <ShopGrid>
        {shops?.map((shop) => (
          <ShopItem
            key={shop.slug}
            shop={shop}
            onClick={() => setSelectedShop(shop)}
          />
        ))}
      </ShopGrid>

      <ShopItemDetails
        shop={selectedShop}
        onClickOutside={() => {
          setSelectedShop(undefined);
        }}
      />

      <Helmet>
        <title lang={language}>{`${t('attributes.titles.shops')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </PageWrapper>
  );
}
