import { useCallback, useRef } from "react";

interface UseInfiniteScrollProps {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  isLoading?: boolean;
  rootMargin?: string;
  threshold?: number;
}

const useInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  isLoading = false,
  threshold = 1.0,
}: UseInfiniteScrollProps): {
  lastElementRef: (element: HTMLElement | null) => void;
  cleanup: () => void;
} => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (element: HTMLElement | null) => {
      // Don't observe while loading or if there's no element
      if (isLoading || !element) return;

      // Disconnect previous observer
      if (observer.current) observer.current.disconnect();

      // Create new observer
      observer.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        },
        {
          threshold,
        }
      );

      // Start observing the new element
      observer.current.observe(element);
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage, isLoading, threshold]
  );

  // Cleanup function to disconnect observer
  const cleanup = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
  }, []);

  return { lastElementRef, cleanup };
};

export default useInfiniteScroll;
