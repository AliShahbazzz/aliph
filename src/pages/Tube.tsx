import { Grid2 } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { tubeData } from "../data";
import { useNavigate } from "react-router-dom";

export const Tube: React.FC = () => {
  const navigate = useNavigate();
  const SyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: 0,
    height: "100%",
    backgroundColor: (theme.vars || theme).palette.background.paper,
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "pointer",
    },
    "&:focus-visible": {
      outline: "3px solid",
      outlineColor: "hsla(210, 98%, 48%, 0.5)",
      outlineOffset: "2px",
    },
  }));

  const SyledCardContent = styled(CardContent)({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: 16,
    flexGrow: 1,
    "&:last-child": {
      paddingBottom: 16,
    },
  });

  const StyledTypography = styled(Typography)({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  });

  const onClickGrid = (id: number) => {
    navigate(`/product?type=tube&id=${id}`);
  };

  return (
    <div>
      <h2>Cold Shrink Tubes</h2>
      <Grid2 container spacing={2} columns={16}>
        {tubeData?.map((i, index) => {
          return (
            <Grid2 size={{ xs: 12, md: 4 }} onClick={() => onClickGrid(index)}>
              <SyledCard
                variant="outlined"
                // onFocus={() => handleFocus(2)}
                // onBlur={handleBlur}
                sx={{ height: "100%" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={i?.img}
                  sx={{
                    height: 274,
                  }}
                />
                <SyledCardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {i?.name}
                  </Typography>
                  <StyledTypography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {i?.description}
                  </StyledTypography>
                </SyledCardContent>
              </SyledCard>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
};
