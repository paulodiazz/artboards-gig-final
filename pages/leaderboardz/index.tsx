import { Container, Typography, Box, Stack, Grid, Avatar, Table, TableContainer, TableBody } from "@mui/material";
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";

function createData(
  src: string,
  name: string,
  size: number,
) {
  return { src, name, size };
}

const dataTmp = [
  createData('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'Aaron Arfmani', 18),
  createData('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'Vitaliy Kydon', 15),
  createData('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'Random Guy', 10),
  createData('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'Nice Girl', 8),
];

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
      <TableContainer component={Paper}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none"
            },
            [`& .${tableRowClasses.root}:after`]: {
                content: '""',
                display: 'block',
                margin: '0 auto',
                width: '80%',
                paddingTop: '20px',
                height: '50%',
                borderBottom: '5px solid #1243FE'
            },
          }}
        >
          <TableBody>
            {
              dataTmp.map((row, index) =>
                <TableRow key={index + 1} sx={{ background: '#011335' }}>
                  <TableCell align="right" sx={{ width: '5%', color: '#FEFEFE' }}>{ index + 1 }</TableCell>
                  <TableCell align="left" sx={{ width: '5%' }}><Avatar src={row.src} /></TableCell>
                  <TableCell sx={{ width: '80%', color: '#FEFEFE' }}>{ row.name }</TableCell>
                  <TableCell sx={{ width: '10%', color: '#FEFEFE' }}>{ row.size }</TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}