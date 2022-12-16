import { Container, Card, CardContent, CardMedia, Typography, Box, Stack } from "@mui/material";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export default function Releases() {
  
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>New Releases</Typography>
      <Card sx={{marginY: '2rem'}}>
        <CardMedia
          component={'img'}
          height= 'auto'
          src="/assets/images/releases.png"
          sx={{
            maxHeight: '488px'
          }}
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Origins</Typography>
            <Typography>Cape Town, South Africa</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>by SergeOne</Typography>
            <Stack gap={1} direction='row'>
              <FiTwitter size={24} />
              <AiOutlineInstagram size={24} />
              <FaDiscord size={24} />
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}