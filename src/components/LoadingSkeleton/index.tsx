import type { ReactNode } from "react";

const LoadingSkeleton = (): ReactNode => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-700 aspect-[3/4] rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
