import React from "react";
import { Grid, Avatar, Box,Rating } from "@mui/material";
import { StarIcon } from "@heroicons/react/20/solid";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>Ram</p>
              <p>March 5,2024</p>
            </div>
          </div>

          <Rating value={4.5} name='half-rating' readOnly precision={.5} />
          <p>Nice Product.I love the quality very much.</p>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductReviewCard;
