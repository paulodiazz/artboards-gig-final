import { useState } from "react";
import { Typography, Stack, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Modal, IconButton, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import CollectionForm from "../../../src/components/collections/CollectionForm";
import CloseIcon from '@mui/icons-material/Close';
import EditCollecionForm from "../../../src/components/collections/EditCollectionForm";

export default function Collections() {
  
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
      'policy': 'adsf98qywhtglhasgoidgjios',
      'name': 'Serge',
      'title': 'First Project',
      'location': 'Cape Town',
      'supply': '50'
    },
    {
      'policy': 'adsf98qgegafsfasfjios',
      'name': 'Daniel',
      'title': 'Awesome',
      'location': 'Cape Town',
      'supply': '20'
    }
  ];

  // New Collection
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Edit Collection
  const [openEdit, setOpenEdit]= useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '2rem' }}>
        <Typography>Collectors</Typography>
        <Stack direction={'row'} spacing={1}>
          <TextField size="small" />
          <SearchIcon fontSize="large" />
          <TuneIcon fontSize="large" />
          <Button onClick={handleOpen}>Add Collection</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: '#1A1D27',
                color: '#FEFEFE'
              }
            }}
          >
            <DialogTitle>New Collection</DialogTitle>
            <DialogContent>
              <CollectionForm />
            </DialogContent>
          </Dialog>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflowY: 'scroll', maxHeight: '90%', marginY: }}
          >
            <Box sx={style}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">New Collection</Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon sx={{ color: '#FEFEFE' }} />
                </IconButton>
              </Box>
              <CollectionForm />
            </Box>
          </Modal> */}
        </Stack>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Policy</StyledTableCell>
              <StyledTableCell>Artist Name</StyledTableCell>
              <StyledTableCell>Artboard Title</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Supply</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              dataTemp.map((row) => (
                <TableRow key={row.title}>
                  <StyledTableCell>{ row.policy }</StyledTableCell>
                  <StyledTableCell>{ row.name }</StyledTableCell>
                  <StyledTableCell>{ row.title }</StyledTableCell>
                  <StyledTableCell>{ row.location }</StyledTableCell>
                  <StyledTableCell>{ row.supply }</StyledTableCell>
                  <StyledTableCell>
                    <IconButton onClick={handleOpenEdit}>
                      <MoreHorizIcon />
                    </IconButton>
                    <Dialog
                      open={openEdit}
                      onClose={handleCloseEdit}
                      PaperProps={{
                        style: {
                          backgroundColor: '#1A1D27',
                          color: '#FEFEFE'
                        }
                      }}
                    >
                      <DialogTitle>Edit Collection</DialogTitle>
                      <DialogContent>
                        <EditCollecionForm />
                      </DialogContent>
                    </Dialog>
                  </StyledTableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}