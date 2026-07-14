import React from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import { createInteraction } from "../../services/interactionService";

const interactionTypes = [
  "In-Person",
  "Phone Call",
  "Video Call",
  "Email",
];

const sentiments = [
  "Positive",
  "Neutral",
  "Negative",
];

const InteractionForm = ({ formData, setFormData}) =>{


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        hcp_name: formData.hcpName,
        interaction_type: formData.interactionType,
        date: formData.date,
        time: formData.time,
        attendees: formData.attendees,
        topics: formData.topics,
        voice_summary: formData.voiceSummary,
        materials: formData.materials,
        samples: formData.samples,
        sentiment: formData.sentiment,
        outcomes: formData.outcomes,
        followup: formData.followup,
      };

      console.log(payload);

      await createInteraction(payload);

      alert("Interaction Saved Successfully ✅");

      setFormData({
        hcpName: "",
        interactionType: "",
        date: "",
        time: "",
        attendees: "",
        topics: "",
        voiceSummary: "",
        materials: "",
        samples: "",
        sentiment: "",
        outcomes: "",
        followup: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to Save Interaction ❌");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="HCP Name"
            name="hcpName"
            value={formData.hcpName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Interaction Type"
            name="interactionType"
            value={formData.interactionType}
            onChange={handleChange}
          >
            {interactionTypes.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            type="date"
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            type="time"
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Attendees"
            name="attendees"
            value={formData.attendees}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Topics Discussed"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Voice Summary"
            name="voiceSummary"
            value={formData.voiceSummary}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Materials Shared"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Samples Distributed"
            name="samples"
            value={formData.samples}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Sentiment"
            name="sentiment"
            value={formData.sentiment}
            onChange={handleChange}
          >
            {sentiments.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Outcomes"
            name="outcomes"
            value={formData.outcomes}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Follow-up Actions"
            name="followup"
            value={formData.followup}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Save Interaction
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
};

export default InteractionForm;