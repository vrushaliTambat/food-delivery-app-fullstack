import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Avatar, Badge, IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (auth.user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };

  // const navigateToProfile = () => {
  //   navigate("/my-profile");
  // };
  // const handleOpenMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleCloseMenu = () => {
  //   setAnchorEl(null);
  // };
  // const handleLogout = () => {
  //   console.log("handle logout");
  // };

  return (
    <nav className="px-5 sticky z-50 top-0 py-[0.8rem] bg-[#e9a483] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
          <li
            onClick={() => navigate("/")}
            className="logo font-semibold text-2xl"
          >
            Food Rush
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div className="">
          {auth.user ? (
            <Avatar
              onClick={handleAvatarClick}
              sx={{ bgcolor: "white", color: "#e9a483" }}
            >
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
          ) : (
            <IconButton
              onClick={() => {
                navigate("/account/login");
              }}
            >
              <PersonIcon />
            </IconButton>
          )}
        </div>
        {/* {true ? (
          <span
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={true ? handleOpenMenu : navigateToProfile}
            className="font-semibold cursor-pointer"
          > */}
        {/* <div>
          <IconButton
            onClick={() => {
              navigate("/account/login");
            }}
          >
            <PersonIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div> */}

        {/* <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/admin")}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu> */}
        <IconButton onClick={() => navigate("/cart")}>
          <Badge color="black" badgeContent={3}>
            <RestaurantIcon sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
