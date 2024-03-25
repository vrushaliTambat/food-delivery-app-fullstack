import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
          <div className="py-2 space-y-2">
            <p>{"mumbai"}</p>
            <p className="text-sm text-blue-500">Feb 15 2024 12:00AM</p>
            <p className="text-sm text-red-500">Feb 17 2024 8:00PM</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton
            //   onClick={handleDeleteEvent}
            //   aria-label="add to favorites"
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
