import { ShopImageStyle } from './styles';

type Props = {
  url?: string;
  shopName?: string;
};

export function ShopImage({ url, shopName }: Props): JSX.Element {
  if (!url) {
    return <div />;
  }

  return <ShopImageStyle src={url} alt={shopName} />;
}
