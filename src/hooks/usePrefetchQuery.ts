import { useQueryClient, type FetchQueryOptions } from "@tanstack/react-query";

const usePrefetchQuery = () => {
  const queryClient = useQueryClient();

  const prefetch = (options: FetchQueryOptions) => {
    const dataExist = queryClient.getQueryData(options.queryKey);

    if (dataExist) return;

    queryClient.prefetchQuery(options);
  };

  return { prefetch };
};
export default usePrefetchQuery;
