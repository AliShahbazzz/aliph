import React from "react";
import { HomeCarousel } from "../components";
import { Container } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <HomeCarousel />
    </Container>
  );
};
