import { act, renderHook } from '@testing-library/react-hooks';

import { fetchShops } from 'services/shops';

import { useShops } from './useShops';

const mockedUseNavigate = jest.fn();
const mockedUseSearchParams = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
  useSearchParams: () => [{ get: mockedUseSearchParams }]
}));
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => [null, { language: 'en' }]
}));

jest.mock('services/shops');

describe('useShops', () => {
  beforeEach(() => jest.resetAllMocks());

  test('should have the correct structure', () => {
    const { result } = renderHook(useShops);

    expect(result.current).toHaveProperty('searchQuery');
    expect(result.current).toHaveProperty('selectedShop');
    expect(result.current).toHaveProperty('setSelectedShop');
    expect(result.current).toHaveProperty('shops');
  });

  test('should return the correct searchQuery', () => {
    mockedUseSearchParams.mockImplementation(() => 'search_query');

    const { result } = renderHook(useShops);

    expect(result.current.searchQuery).toBe('search_query');

    // mockedUseSearchParams.mockImplementation(() => 'selected_shop');
    // expect(result.current.selectedShop).toBe('selected_shop');

    // mockedUseSearchParams.mockImplementation(() => 'shops');
    // expect(result.current.shops).toBe('shops');
  });

  test('should fetch data with the correct parameters', async () => {
    mockedUseSearchParams
      .mockImplementationOnce(() => '12')
      .mockImplementationOnce(() => '34')
      .mockImplementationOnce(() => 'search_query');

    const { waitForNextUpdate } = renderHook(useShops);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(fetchShops).toHaveBeenCalledWith({ lat: '12', lon: '34' });
  });
});
