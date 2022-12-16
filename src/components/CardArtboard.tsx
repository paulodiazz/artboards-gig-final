import { Container, Typography, Grid, Card, CardMedia, CardContent, Box, Button, CardActionArea } from "@mui/material";

export default function CardArtboard() {
  
  return (
    <Card>
      <CardActionArea href="/artboardz/project">
        <CardMedia
          component={'img'}
          src="/assets/images/releases.png"
          height={'auto'}
          sx={{ maxHeight: '228' }}
        />
      </CardActionArea>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '16px' }}>Origins</Typography>
          <Typography sx={{ fontSize: '16px' }}>Lisitings: 3/30</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem' }}>
          <Typography sx={{ fontSize: '16px' }}>by SergeOne</Typography>
          <Typography sx={{ fontSize: '16px' }}>Cape Town, South Africa</Typography>
        </Box>
        <Button sx={{ fontSize: '18px' }} variant="contained" color="secondary" fullWidth>Floor: 340</Button>
      </CardContent>
    </Card>
  );
}