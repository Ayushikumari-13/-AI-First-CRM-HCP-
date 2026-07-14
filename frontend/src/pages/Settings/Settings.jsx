import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";

const Settings = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Profile */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Profile
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  defaultValue="Ayushi Kumari"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="ayushi@example.com"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* AI Settings */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              AI Configuration
            </Typography>

            <TextField
              fullWidth
              label="AI Model"
              value="Groq Llama 3"
              disabled
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="API Status"
              value="Connected"
              disabled
            />
          </Paper>
        </Grid>

        {/* Preferences */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Preferences
            </Typography>

            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable Notifications"
            />

            <br />

            <FormControlLabel
              control={<Switch />}
              label="Dark Mode"
            />
          </Paper>
        </Grid>

        {/* Save */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Divider sx={{ mb: 2 }} />

            <Button
              variant="contained"
              size="large"
            >
              Save Settings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;