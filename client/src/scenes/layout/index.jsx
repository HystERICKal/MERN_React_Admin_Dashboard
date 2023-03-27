import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

function Layout() {
  // The line below is gonna return true or false on whether
  // the specified screensize is achieved on the screen
  // Desktop: True
  // Mobile: False
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); //Check if Sidebar is open
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* The Outlet is whatever is underneath The navbar on a page
        E.g on the dashboard page, the dashboard itself is the outlet */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
