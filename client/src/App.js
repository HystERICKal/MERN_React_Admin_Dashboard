import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";

function App() {
  //All these theme settings are in the documentation
  const mode = useSelector((state) => state.global.mode); //grab state created in the state folder
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Any Route inside the Route component will have the layout as its parent
            Since the Layout component comprises of navbar and sidebar every page will have the two by default */}
            <Route element={<Layout />}>
              {/* Navigate to the dashboard once this page has been landed on */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />

              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
