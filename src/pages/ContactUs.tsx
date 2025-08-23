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
            <Typography variant="body1">support@yourcompany.com</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Phone color="primary" />
            <Typography variant="body1">+1 (555) 123-4567</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <LocationOn color="primary" />
            <Typography variant="body1">
              123 Business Street, Suite 456
              <br />
              New York, NY 10001
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
