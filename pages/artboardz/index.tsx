import { Container, Typography, Grid, Card, CardMedia, CardContent, Box, Button, CardActionArea } from "@mui/material";
import CardArtboard from "../../src/components/CardArtboard";

export default function Artboardz() {
  
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>New Releases</Typography>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <CardArtboard />
        </Grid>
      </Grid>
    </Container>
  );
}