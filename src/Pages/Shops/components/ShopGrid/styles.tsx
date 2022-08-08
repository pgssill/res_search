import styled from '@emotion/styled';

import { BREAKPOINTS, GRID_MARGIN } from 'Layouts';

export const ShopGrid = styled.section`
  display: grid;
  gap: ${GRID_MARGIN};
  grid-template-columns: 1fr;
  padding-bottom: ${GRID_MARGIN};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
