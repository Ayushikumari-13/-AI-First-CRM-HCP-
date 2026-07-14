import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";

import { getInteractions } from "../../services/interactionService";

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const data = await getInteractions();
      setInteractions(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const totalInteractions = interactions.length;

  const positive = interactions.filter(
    (i) =>
      i.sentiment?.toLowerCase().includes("positive")
  ).length;

  const neutral = interactions.filter(
    (i) =>
      i.sentiment?.toLowerCase().includes("neutral")
  ).length;

  const negative = interactions.filter(
    (i) =>
      i.sentiment?.toLowerCase().includes("negative")
  ).length;

  const totalHCP = new Set(
    interactions.map((i) => i.hcp_name)
  ).size;

  const cards = [
    {
      title: "Total Interactions",
      value: totalInteractions,
      color: "#1976d2",
    },
    {
      title: "Positive",
      value: positive,
      color: "#4CAF50",
    },
    {
      title: "Neutral",
      value: neutral,
      color: "#FF9800",
    },
    {
      title: "Negative",
      value: negative,
      color: "#F44336",
    },
    {
      title: "Total HCP",
      value: totalHCP,
      color: "#9C27B0",
    },
  ];

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Analytics Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                borderLeft: `8px solid ${card.color}`,
              }}
            >
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {card.title}
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
                mt={2}
              >
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Analytics;