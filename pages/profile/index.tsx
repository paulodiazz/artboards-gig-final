import { Container, Typography, Stack, Box, Button, Grid, Avatar, IconButton } from "@mui/material";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import CardArtboard from "../../src/components/CardArtboard";

export default function Profile() {
  
  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>My Profile</Typography>
      </Container>
      <Box sx={{ background: '#011335', paddingBottom: '2rem' }}>
        <Grid container>
          <Grid item xs={6} md={2}>
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" sx={{ width: '190px', height: '190px' }} />
            <IconButton sx={{ background: '#0E1528', borderRadius: '2rem' }}>
              <FiEdit color="#FEFEFE" fontSize={'1.25rem'} />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={10}>
            <Stack direction={'row'}>
              <Typography>Maria Corvo</Typography>
              <IconButton>
                <AiOutlineTwitter color="#FEFEFE" size={'20px'} />
              </IconButton>
            </Stack>
            <Typography>New York, USA</Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={6} md={4}>
          <CardArtboard />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardArtboard />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardArtboard />
        </Grid>
      </Grid>

    </>
    
  );
}