import { Container, Typography, Stack, Card, CardMedia, CardContent, Box, Button } from "@mui/material";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Project() {
  
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Artboardz</Typography>
      <Box>
        <img src="/assets/images/releases.png" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '1.5rem' }}>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Floor</Typography>
          <Typography align="center">100</Typography>
        </Stack>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Listings</Typography>
          <Typography align="center">5/40</Typography>
        </Stack>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Royalty</Typography>
          <Typography align="center">5%</Typography>
        </Stack>
      </Box>
      <Box textAlign={'center'}>
        <Button variant="contained" color="secondary">Jpgstore</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Origins</Typography>
        <Typography sx={{ fontSize: '14px' }}>Cape Town, South Africa</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography sx={{ fontSize: '14px' }}>by SergeOne</Typography>
        <Stack direction={'row'} spacing={1}>
          <AiOutlineTwitter size={14} />
          <FaDiscord size={14} />
          <TbWorld size={14} />
        </Stack>
      </Box>
      <Typography sx={{ fontSize: '20px', paddingY: '1.5rem' }}>
        Origins is the first in a collection centering on South African tribal groups, biodiversity, and upliftment. The collection, as well as the first piece, is called Origins.  
      </Typography>
      <Typography sx={{ fontSize: '20px', paddingY: '1.5rem' }}>
        Origins pays homage to the genesis of graffiti art originating from the San Bushmen. The bushmen crushed up haematite or red ochre minerals into a fine powder they would put in their mouth and “spray” from their mouth over their hands onto the rock face creating the hand print—making them the original graffiti artists.  In the piece, you can see the bushman is in the middle of a vision as he’s painting, where old meets new from right to left.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Patrons</Typography>
      <Box>
        <Stack direction={'row'} gap={2} sx={{ fontSize: '20px', paddingY: '1.5rem' }}>
          <Typography>Jack</Typography>
          <Typography>James</Typography>
          <Typography>Ana</Typography>
          <Typography>Mark</Typography>
          <Typography>Maria</Typography>
          <Typography>Kobi</Typography>
          <Typography>Kobi</Typography>
          <Typography>Mark</Typography>
          <Typography>Kobi</Typography>
          <Typography>Mark</Typography>
          <Typography>Kobi</Typography>
          <Typography>Mark</Typography>
        </Stack>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Creator</Typography>
      <Typography sx={{ fontSize: '20px', paddingY: '1.5rem' }}>
        SergeOne is an award-winning Cape Town-based graffiti artist and illustrator. He started writing graffiti in 2008, focusing on letter forms and style writing.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Location</Typography>
      <Typography sx={{ fontSize: '20px', paddingY: '1.5rem' }}>
        Battery Park Waterfront, Cape Town, South Africa. Battery Park is located in the heart of Cape Town and connects the V&A Waterfront to the city through scenic pedestrian routes, canals, and recreational spots.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Origins Evolution</Typography>
      <Typography gutterBottom>Digital</Typography>
      <Box>
        <img src="/assets/images/creator.png" />
      </Box>
      <Typography gutterBottom>Location</Typography>
      <Box>
        <img src="/assets/images/digital.png" />
      </Box>
      <Typography gutterBottom>Artboard</Typography>
      <Box>
        <img src="/assets/images/artboard.png" />
      </Box>
    </Container>
  );
}