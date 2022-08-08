import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { GRID_MARGIN } from 'Layouts';

export const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  border: none;
  padding: 0 calc(${GRID_MARGIN} / 2);

  background: ${({ theme }) => theme.colors.surfaceLow};
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const SearchResultsWrapper = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchResult = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: background-color 200ms ease-in-out;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem ${GRID_MARGIN};
  text-decoration: none;
  min-height: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 0.1rem 0.2rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverPrimaryBackground};
  }
`;
