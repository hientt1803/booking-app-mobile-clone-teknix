import { Box } from "@mantine/core";
import { ReviewOverview } from "./review-overview";
import { ListComment } from "./list-comment";

export const ReviewContainer = () => {
  return (
    <Box mt={25}>
      <ReviewOverview />
      <ListComment />
    </Box>
  );
};
