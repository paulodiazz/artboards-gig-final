import { Container, Typography, Box, Stack, Grid, Avatar } from "@mui/material";
import { flexbox } from "@mui/system";

const dataTmp = [
  {
    'src': "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    'name': 'The Art Bank ',
    'size': 20
  },
  {
    'src': "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    'name': 'Aaron Arfmani',
    'size': 18
  },
  {
    'src': "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    'name': 'Vitaliy Kydon',
    'size': 15
  },
  {
    'src': "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    'name': 'Random Guy',
    'size': 10
  },
  {
    'src': "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    'name': 'Nice Girl',
    'size': 8
  }
]

export default function Leaderboardz() {
  
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Leaderboardz</Typography>
      <Typography variant="subtitle1" align="center">Statics</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Collections</Typography>
          <Typography align="center">5</Typography>
        </Stack>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Collections</Typography>
          <Typography align="center">5</Typography>
        </Stack>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Collections</Typography>
          <Typography align="center">5</Typography>
        </Stack>
      </Box>
      {/* <Grid container rowSpacing={1}>
        {
          dataTmp.map((row, index) =>
            <Grid item>{ index + 1 }</Grid>
            <Grid item><Avatar src={ row.src } /></Grid>
            <Grid item>{ row.name }</Grid>
            <Grid item>{ row.size }</Grid>
          )
        }
      </Grid> */}
    </Container>
  );
}