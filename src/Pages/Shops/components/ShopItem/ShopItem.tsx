import { useTranslation } from 'react-i18next';

import { ShopSearchResult } from 'models/ShopSearchResult';
import { findLocaleInArray } from 'utils/findLocaleInArray';
import { formatList } from 'utils/formatList';

import { ShopImage } from '../ShopImage/ShopImage';

import {
  ShopCard,
  CardTitle,
  CardSubtitle,
  CardSmallHeading,
  CardContent
} from './styles';

type Props = {
  shop: ShopSearchResult;
  onClick?: () => void;
};

export function ShopItem({ shop, onClick }: Props): JSX.Element {
  const [, { language }] = useTranslation();
  const {
    name_translations,
    content_title_translations,
    tagline_translations,
    search_image,
    cuisines
  } = shop;

  const translatedName = findLocaleInArray(
    name_translations,
    language
  )?.translation;
  const translatedTagline = findLocaleInArray(
    tagline_translations,
    language
  )?.translation;
  const translatedContentTitle = findLocaleInArray(
    content_title_translations,
    language
  )?.translation;

  const formattedCuisines = formatList(cuisines, language);

  return (
    <ShopCard onClick={onClick}>
      <ShopImage url={search_image} shopName={translatedName} />

      <CardContent>
        <CardTitle>{translatedName}</CardTitle>
        <CardSmallHeading>{formattedCuisines}</CardSmallHeading>
        <CardSubtitle>
          {translatedTagline || translatedContentTitle}
        </CardSubtitle>
      </CardContent>
    </ShopCard>
  );
}
