import { useCallback, useRef } from "react";

type TlastElementRef = (element: HTMLElement | null) => void;

interface UseInfiniteScrollProps {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const useInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseInfiniteScrollProps): TlastElementRef => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (element: HTMLElement | null) => {
      // Don't observe while loading or fetching or if there's no element
      if (isFetchingNextPage) return;

      // Disconnect previous observer
      if (observer.current) observer.current.disconnect();

      // Create new observer
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });

      // Start observing the new element
      if (element) observer.current.observe(element);
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  return lastElementRef;
};

export default useInfiniteScroll;
