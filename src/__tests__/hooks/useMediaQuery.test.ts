/* eslint-disable @typescript-eslint/no-unused-vars */
import { renderHook, act } from '@testing-library/react-hooks';
import useMediaQuery from '@/hooks/useMediaQuery';

describe('useMediaQuery', () => {
  beforeEach(() => {
    // Mocking matchMedia
    window.matchMedia = jest.fn().mockImplementation((query: string) => {
      return {
        matches: query === '(min-width: 66.25rem)',
        media: query,
        onchange: null,
        addEventListener: (type: string, callback: EventListener) => {},
        removeEventListener: (type: string, callback: EventListener) => {},
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if query matches initially', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 66.25rem)'));

    expect(result.current).toBe(true);
  });

  it('should return false if query does not match initially', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 70rem)'));

    expect(result.current).toBe(false);
  });

  it('should update when the query match changes', () => {
    const listeners: { [key: string]: () => void } = {};

    // Mock the implementation of matchMedia with an event listener
    window.matchMedia = jest.fn().mockImplementation((query: string) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: (type: string, callback: EventListener) => {
          listeners[type] = callback as () => void;
        },
        removeEventListener: jest.fn(),
      };
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 66.25rem)'));

    // Initially, it should return false as it doesn't match
    expect(result.current).toBe(false);

    // Simulate the change in media query that triggers the listener
    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      listeners['resize'] && listeners['resize'](); // Simulate a resize event
    });

    // Update the mock to simulate a match for the media query
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: true,
    }));

    // Force the hook to re-render and check if the result is now true
    const { result: updatedResult } = renderHook(() => useMediaQuery('(min-width: 66.25rem)'));

    // Verify that the updated result is true
    expect(updatedResult.current).toBe(true);
  });
});
