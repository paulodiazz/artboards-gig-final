import { Container, Grid, Typography, Stack, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

export default function Users() {
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#14171F',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const dataTemp = [
    {
      'avatar': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      'wallet': 'addrljl;jl;dsa;ljfkfjklee9jl.jdfl;jd',
      'tag': 'The Terminator',
      'nationality': 'Chinese',
      'twitter': '@twittername',
      'collections': '4',
      'size': '10',
      'display': 'true'
    },
    {
      'avatar': 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'wallet': 'addrljl;jl;dsa;ljfkfjklee9jl.jdfl;jd',
      'tag': 'Vitaliy the Man',
      'nationality': 'Portuguese',
      'twitter': '@twittername',
      'collections': '6',
      'size': '12',
      'display': 'false'
    }
  ]

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '2rem' }}>
        <Typography>Collectors</Typography>
        <Stack direction={'row'} spacing={1}>
          <TextField size="small" />
          <SearchIcon fontSize="large" />
          <TuneIcon fontSize="large" />
        </Stack>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Profile Image</StyledTableCell>
              <StyledTableCell>Wallet Address</StyledTableCell>
              <StyledTableCell>Artboardz Tag</StyledTableCell>
              <StyledTableCell>Nationality</StyledTableCell>
              <StyledTableCell>Twitter</StyledTableCell>
              <StyledTableCell>Unique Collections</StyledTableCell>
              <StyledTableCell>Collection Size</StyledTableCell>
              <StyledTableCell>Display</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              dataTemp.map((row) => (
                <TableRow key={row.tag}>
                  <StyledTableCell><Avatar src={row.avatar} /></StyledTableCell>
                  <StyledTableCell>{ row.wallet }</StyledTableCell>
                  <StyledTableCell>{ row.tag }</StyledTableCell>
                  <StyledTableCell>{ row.nationality }</StyledTableCell>
                  <StyledTableCell>{ row.twitter }</StyledTableCell>
                  <StyledTableCell>{ row.collections }</StyledTableCell>
                  <StyledTableCell>{ row.size }</StyledTableCell>
                  <StyledTableCell>{ row.display }</StyledTableCell>
                  <StyledTableCell><MoreHorizIcon /></StyledTableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}