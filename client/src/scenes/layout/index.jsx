import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";

function Layout() {
  return (
    <Box width="100">
      <Box>
        <Navbar />
        {/* The Outlet is whatever is underneath The navbar on a page
        E.g on the dashboard page, the dashboard itself is the outlet */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
