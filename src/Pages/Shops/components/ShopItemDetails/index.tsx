import { Panel } from '@tablecheck/tablekit-panel';
import { useTranslation } from 'react-i18next';

import { ShopSearchResult } from 'models/ShopSearchResult';
import { findLocaleInArray } from 'utils/findLocaleInArray';
import { formatList } from 'utils/formatList';

import { ShopImage } from '../ShopImage/ShopImage';

import {
  ShopItemDetailsContainer,
  ShopItemDetailsImageWrapper,
  ShopItemDetailsTitle,
  ShopItemDetailsSubtitle,
  ShopItemDetailsSmallHeading,
  ShopItemDetailsContent
} from './styles';

type Props = {
  shop?: ShopSearchResult;
  onClickOutside: () => void;
};

export function ShopItemDetails({ shop, onClickOutside }: Props): JSX.Element {
  const [, { language }] = useTranslation();

  if (!shop) {
    return (
      <Panel width="20rem" isOpen={!!shop} onClickOutside={onClickOutside} />
    );
  }

  const {
    name_translations,
    content_title_translations,
    tagline_translations,
    search_image,
    content_body_translations,
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
  const translatedBodyContent = findLocaleInArray(
    content_body_translations,
    language
  )?.translation;

  const formattedCuisines = formatList(cuisines, language);

  return (
    <Panel width="20rem" isOpen={!!shop} onClickOutside={onClickOutside}>
      <ShopItemDetailsImageWrapper>
        <ShopImage url={search_image} shopName={translatedName} />
      </ShopItemDetailsImageWrapper>

      <ShopItemDetailsContainer>
        <ShopItemDetailsTitle>{translatedName}</ShopItemDetailsTitle>

        {(translatedTagline || translatedContentTitle) && (
          <ShopItemDetailsSubtitle>
            {translatedTagline || translatedContentTitle}
          </ShopItemDetailsSubtitle>
        )}

        <ShopItemDetailsSmallHeading>
          {formattedCuisines}
        </ShopItemDetailsSmallHeading>
      </ShopItemDetailsContainer>

      {translatedBodyContent && (
        <ShopItemDetailsContent>{translatedBodyContent}</ShopItemDetailsContent>
      )}
    </Panel>
  );
}
