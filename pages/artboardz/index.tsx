import { Container, Typography, Grid, Card, CardMedia, CardContent, Box, Button } from "@mui/material";

export default function Artboardz() {
  
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>New Releases</Typography>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card>
            <CardMedia
              component={'img'}
              src="/assets/images/releases.png"
              height={'auto'}
              sx={{ maxHeight: '228' }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Origins</Typography>
                <Typography>Lisitings: 3/30</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>by SergeOne</Typography>
                <Box>
                  <Typography>Cape Town, South Africa</Typography>
                </Box>
              </Box>
              <Button variant="contained" color="secondary" fullWidth>Floor: 340</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardMedia
              component={'img'}
              src="/assets/images/releases.png"
              height={'auto'}
              sx={{ maxHeight: '228' }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Origins</Typography>
                <Typography>Lisitings: 3/30</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>by SergeOne</Typography>
                <Box>
                  <Typography>Cape Town, South Africa</Typography>
                </Box>
              </Box>
              <Button variant="contained" color="secondary" fullWidth>Floor: 340</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardMedia
              component={'img'}
              src="/assets/images/releases.png"
              height={'auto'}
              sx={{ maxHeight: '228' }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Origins</Typography>
                <Typography>Lisitings: 3/30</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>by SergeOne</Typography>
                <Box>
                  <Typography>Cape Town, South Africa</Typography>
                </Box>
              </Box>
              <Button variant="contained" color="secondary" fullWidth>Floor: 340</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardMedia
              component={'img'}
              src="/assets/images/releases.png"
              height={'auto'}
              sx={{ maxHeight: '228' }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Origins</Typography>
                <Typography>Lisitings: 3/30</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>by SergeOne</Typography>
                <Box>
                  <Typography>Cape Town, South Africa</Typography>
                </Box>
              </Box>
              <Button variant="contained" color="secondary" fullWidth>Floor: 340</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}