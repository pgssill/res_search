import styled from '@emotion/styled';

import { GRID_MARGIN, BREAKPOINTS } from 'Layouts';

export const ShopCard = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  grid-gap: 1rem;
  padding: ${GRID_MARGIN};
  min-height: 8rem;

  cursor: pointer;

  background: ${({ theme }) => theme.colors.surfaceHigh};
  box-shadow: 0px 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverPrimaryBackground};
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    grid-template-rows: unset;
    grid-template-columns: minmax(0, 7rem) 1fr;

    min-height: 8rem;
    max-height: 9rem;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.2rem;
  padding-bottom: 0.1rem;
  font-weight: bolder;
`;
export const CardSubtitle = styled.h5`
  @media (min-width: ${BREAKPOINTS.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const CardSmallHeading = styled.h6`
  font-size: 0.8rem;
  padding-bottom: 0.2rem;
`;

export const CardContent = styled.div`
  padding-left: 1rem;
  overflow: hidden;
`;
