// ContactUs.tsx
import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export const ContactUs: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <Stack spacing={3} mt={2}>
          <Box display="flex" alignItems="center" gap={2}>
            <Email color="primary" />
            <Typography variant="body1">management.aliph@gmail.com</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Phone color="primary" />
            <Typography variant="body1">+91 70934 96194</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <LocationOn color="primary" />
            <Typography variant="body1">Hyderabad, TG 500059</Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
