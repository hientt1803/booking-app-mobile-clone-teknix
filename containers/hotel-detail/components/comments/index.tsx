import React from "react";
import { ListComment } from "./list-comment";
import { ReviewOverview } from "./review-overview";

export const ReviewContainer = () => {
  return (
    <React.Fragment>
      <ReviewOverview />
      <ListComment />
    </React.Fragment>
  );
};
