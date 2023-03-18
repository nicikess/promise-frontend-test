import React from "react";

import ResponsiveAppBar from "./components/NavBar";
import useStyles from "./styles";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Overview from "./components/Overview";
import Expertise from "./components/Expertise";
import Home from "./components/Home";
import Tools from "./components/Tools";

const App = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const pages = ["Start page", "Participant overview", "Blog"];
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Overview" element={<Overview />} />
        <Route path="Expertise" element={<Expertise />} />
        <Route path="Tools" element={<Tools />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
