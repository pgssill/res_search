import styled from '@emotion/styled';

import { GRID_MARGIN } from 'Layouts';

export const ShopItemDetailsContainer = styled.div`
  background: ${({ theme }) => theme.colors.surfaceHigh};

  padding: ${GRID_MARGIN};
`;

export const ShopItemDetailsImageWrapper = styled.div`
  width: 100%;
  height: 30%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const ShopItemDetailsTitle = styled.h4`
  font-size: 1.2rem;
  padding-bottom: 0.1rem;
  font-weight: bolder;
`;
export const ShopItemDetailsSubtitle = styled.h5`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const ShopItemDetailsSmallHeading = styled.h6`
  font-size: 0.8rem;
  padding-bottom: 0.2rem;
`;

export const ShopItemDetailsContent = styled.div`
  padding: ${GRID_MARGIN};
`;
