// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import type {} from "@mui/material/themeCssVarsAugmentation";
import AppTheme from "./shared-theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { AppAppBar, Footer } from "./components";
import { Blog, Home, Materials, Process, Tube, ProductDetails } from "./pages";
import "./App.css";

export const App: React.FC = () => {
  return (
    <Router>
      <AppTheme>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/tube" element={<Tube />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product" element={<ProductDetails />} />
          </Routes>
        </Container>
        <Footer />
      </AppTheme>
    </Router>
  );
};
