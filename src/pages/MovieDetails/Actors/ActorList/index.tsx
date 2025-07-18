import LoadingSkeleton from "@components/LoadingSkeleton";
import ProfileCard from "@components/ProfileCard";
import type { MovieCredits200ResponseCastInner } from "@lib/services/tmdb-api/v3.0";
import { isEmpty } from "@utils/index";
import { type FC, type ReactNode } from "react";

type TActorsListData = MovieCredits200ResponseCastInner[];

interface IActorList {
  data: TActorsListData;
  isLoading: boolean;
}

const ActorList: FC<IActorList> = ({ data, isLoading }): ReactNode => {
  if (isLoading) return <LoadingSkeleton />;

  if (!data || isEmpty(data)) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {data.slice(0, 10).map((cast, i) => (
        <ProfileCard
          key={i}
          name={cast.name || ""}
          profilePath={cast.profile_path || ""}
          role={cast.character || ""}
        />
      ))}
    </div>
  );
};

export default ActorList;
