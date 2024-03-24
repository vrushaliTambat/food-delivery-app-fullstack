import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{
            height: 345,
            // "&:hover": {
            //   transform: "scale(1.1)", // Example: Scale the image on hover
            //   transition: "transform 0.5s ease-in-out", // Example: Apply a smooth transition effect
            // },
          }}
          image="https://cms.upsidefoods.com/wp-content/uploads/2023/01/FooterBowl_Small.png"
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h5">Indian Restaurant</Typography>
          <Typography variant="body2" color="text.secondary">
            50% off on your first order
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCard;
