import { Box, Typography, Button, ToggleButtonGroup, ToggleButton, Grid, InputLabel, Input, FormHelperText } from "@mui/material";

const textGrey = {
  color: '#B3B5BD',
  paddingBottom: '0.5rem'
};

const inputStyle = {
  color: '#B3B5BD',
  background: '#272832'
}

export default function EditCollecionForm() {

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputLabel sx={textGrey} htmlFor="policy">Policy</InputLabel>
          <Input sx={inputStyle} id="policy" aria-describedby="Policy" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel sx={textGrey} htmlFor="artistName">Artist Name</InputLabel>
          <Input sx={inputStyle} id="artistName" aria-describedby="Artist name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel sx={textGrey} htmlFor="artboardTitle">Artboard Title</InputLabel>
          <Input sx={inputStyle} id="artboardTitle" aria-describedby="Artboard title" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel sx={textGrey} htmlFor="location">Location</InputLabel>
          <Input sx={inputStyle} id="location" aria-describedby="Location" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel sx={textGrey} htmlFor="supply">Supply </InputLabel>
          <Input sx={inputStyle} id="supply" aria-describedby="Supply" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={textGrey} htmlFor="artboardDescription">Artboard Description </InputLabel>
          <Input sx={inputStyle} id="artboardDescription" aria-describedby="Artboard description" fullWidth multiline rows={7} />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={textGrey} htmlFor="about">About me</InputLabel>
          <Input sx={inputStyle} id="about" aria-describedby="About me" fullWidth multiline rows={7} />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={textGrey} htmlFor="mintingDetails">Minting Details</InputLabel>
          <Input sx={inputStyle} id="mintingDetails" aria-describedby="Minting details" fullWidth multiline rows={7} />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel sx={textGrey} htmlFor="twitter">Twitter</InputLabel>
          <Input sx={inputStyle} id="twitter" aria-describedby="Twitter" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel sx={textGrey} htmlFor="discord">Discord</InputLabel>
          <Input sx={inputStyle} id="discord" aria-describedby="Discord" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel sx={textGrey} htmlFor="instagram">Instagram</InputLabel>
          <Input sx={inputStyle} id="instagram" aria-describedby="Instagram" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={textGrey} htmlFor="artboardImage">Upload your Artboard image</InputLabel>
          <Input sx={inputStyle} id="artboardImage" aria-describedby="Artboard image" fullWidth multiline rows={7} />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={textGrey} htmlFor="artboardLocationImage">Upload your Artboard location image</InputLabel>
          <Input sx={inputStyle} id="artboardLocationImage" aria-describedby="Artboard location image" fullWidth multiline rows={7} />
        </Grid>
        <Grid item xs={12}>
          <InputLabel sx={textGrey} htmlFor="personalImage">Upload your personal/working image</InputLabel>
          <Input sx={inputStyle} id="personalImage" aria-describedby="Personal or working image" fullWidth multiline rows={7} />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '1rem' }}>
        <Button sx={{ marginX: '0.5rem'}} variant="outlined">Cancel</Button>
        <Button sx={{ marginX: '0.5rem'}} variant="contained">Edit</Button>
      </Box>
    </>
  );
}