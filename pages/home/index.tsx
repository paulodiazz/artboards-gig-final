import { Container, Grid, Typography, Stack, Box } from "@mui/material";

const benefits = [
  {
    'img': '/assets/images/benefit1.png',
    'info': 'Adorning cities with art not advertising'
  },
  {
    'img': '/assets/images/benefit2.png',
    'info': 'Personalized physical tag on the mural'
  },
  {
    'img': '/assets/images/benefit3.png',
    'info': 'Personalized digital tag on collection page'
  },
  {
    'img': '/assets/images/benefit4.png',
    'info': 'Tactfully promoting Cardan'
  }
];

const flows = [
  {
    'img': '/assets/images/flow1.png',
    'info': 'Artist creates a mural on a positive narrative'
  },
  {
    'img': '/assets/images/flow2.png',
    'info': 'Artboardz teaches artist how to mint NFTs'
  },
  {
    'img': '/assets/images/flow3.png',
    'info': 'Artboardz markets and sells the NFTs'
  },
  {
    'img': '/assets/images/flow4.png',
    'info': 'A public location is chosen big enough for the artwork'
  },
  {
    'img': '/assets/images/flow5.png',
    'info': 'The proceeds are used to create physical artwork'
  },
  {
    'img': '/assets/images/flow6.png',
    'info': 'Artboardz promotion means increasing artist royalties'
  }
]

export default function Home() {
  
  return (
    <Container>
      <Box sx={{ paddingBottom: '5rem' }}>
        <Typography paddingBottom={2} variant="h4" align="center" gutterBottom>Replacing Billboards with Art</Typography>
        <Typography paddingBottom={3} variant="subtitle1" align="center" gutterBottom>
          Artboardz works with street artists to combine NFT art with physical art to beautify cities, replacing billboards with art. This innovative approach is tailored to support artists in the onboarding process bringing them into the digital ecosystem, promoting their art, and helping brand Cardano simultaneously. These initiatives are fully funded through the sale of Cardano NFTs, and royalties go to the artists.
        </Typography>
        <Typography paddingBottom={2} variant="subtitle1" align="center" gutterBottom>
          Through NFTs, local artists can access global buyers and collectors to bring color and life to their cities with street art. While physical images might disappear one day, the digital versions will always survive, allowing the owners to enjoy their beauty and the artist to receive royalties on sales, which they were never able to do before.
        </Typography>
      </Box>
        
      
      <Typography paddingBottom={2} variant="h4" align="center" gutterBottom>Collector Benefits</Typography>
      <Grid container spacing={5} paddingBottom={5}>
        {
          benefits.map((benefit) => 
            <Grid item  xs={12}  md={3}>
              <Stack spacing={2} alignItems="center">
                  <img src={ benefit.img } width={'90%'} height={'auto'}  />
                  <Typography variant="subtitle1" align="center">
                    { benefit.info }
                  </Typography>
              </Stack>
            </Grid>
          )
        }
      </Grid>

      <Typography variant="h4" align="center" gutterBottom>The Artboardz Flow</Typography>
      <Typography sx={{ paddingBottom: '2rem' }} variant="subtitle1" gutterBottom>
        The artist first creates the digital Artboardz version. Artists have complete creative freedom as long as the work is imbued with a positive, inspiring message. Once between 30 to 50 NFTs have sold, the artist creates the equivalent physical version at a predetermined public location.
      </Typography>
      <Grid container spacing={5}>
        {
          flows.map((flow) => 
            <Grid item  xs={12}  md={4}>
              <Stack spacing={2} alignItems="center">
                  <img src={ flow.img } width={'90%'} height={'auto'}  />
                  <Typography variant="subtitle1" align="center">
                    { flow.info }
                  </Typography>
              </Stack>
            </Grid>
          )
        }
      </Grid>
    </Container>
  );
}