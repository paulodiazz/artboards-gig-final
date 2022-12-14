import { Box, Typography, Button, ToggleButtonGroup, ToggleButton, Grid, InputLabel, Input, FormHelperText } from "@mui/material";
import { useState } from "react";
import { styled } from '@mui/material/styles';

const textGrey = {
  color: '#B3B5BD',
  paddingBottom: '0.5rem'
};

const inputStyle = {
  color: '#B3B5BD',
  background: '#272832'
}

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  '& MuiToggleButton-standard': {
    color: '#FEFEFE',
    border: 'none',
    '&.Mui-selected': {
      color: '#FEFEFE'
    }
  }
}));

export default function CollectionForm() {
  const [display, setDisplay] = useState<string | null>('general');
  
  const handleDisplay = (
    event: React.MouseEvent<HTMLElement>,
    newDisplay: string | null,
  ) => {
    setDisplay(newDisplay);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '1rem' }}>
        <ToggleButtonGroup
          value={display}
          exclusive
          onChange={handleDisplay}
        >
          <StyledToggleButton value={'general'}>General Description</StyledToggleButton>
          <StyledToggleButton selected={true} value={'metadata'}>Metadata</StyledToggleButton>
        </ToggleButtonGroup>
      </Box>
      
      { display == 'general' ?
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
            <Input sx={inputStyle} id="artboardImage" aria-describedby="Artboard Image" fullWidth multiline rows={7} />
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
      :
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="artName">Art Name</InputLabel>
              <Input sx={inputStyle} id="artName" aria-describedby="Art name" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="artistName">Artist Name</InputLabel>
              <Input sx={inputStyle} id="artistName" aria-describedby="Artist name" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="Artist instagram">Artist Instagram</InputLabel>
              <Input sx={inputStyle} id="Artist instagram" aria-describedby="Artist Instagram" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} />
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="muralCity">Mural City</InputLabel>
              <Input sx={inputStyle} id="muralCity" aria-describedby="Mural city" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="muralCountry">Mural Country</InputLabel>
              <Input sx={inputStyle} id="muralCountry" aria-describedby="Mural country" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputLabel sx={textGrey} htmlFor="muralDescription">Mural Description</InputLabel>
              <Input sx={inputStyle} id="muralDescription" aria-describedby="Mural description" fullWidth multiline rows={7} />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="nftRarity">NFT Rarity</InputLabel>
              <Input sx={inputStyle} id="nftRarity" aria-describedby="NFT rarity" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="nftSupply">NFT Supply</InputLabel>
              <Input sx={inputStyle} id="nftSupply" aria-describedby="NFT supply" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputLabel sx={textGrey} htmlFor="projectDescription">Project Description</InputLabel>
              <Input sx={inputStyle} id="projectDescription" aria-describedby="Project description" fullWidth multiline rows={7} />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="publisher">Publisher</InputLabel>
              <Input sx={inputStyle} id="publisher" aria-describedby="Publisher" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="publisherTwitter">Publisher Twitter</InputLabel>
              <Input sx={inputStyle} id="publisherTwitter" aria-describedby="Publisher Twitter" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="publisherWebsite">Publisher Website</InputLabel>
              <Input sx={inputStyle} id="publisherWebsite" aria-describedby="Publisher website" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} />
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="royalty">Royalty</InputLabel>
              <Input sx={inputStyle} id="royalty" aria-describedby="Royalty" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} />
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="collection">Collection</InputLabel>
              <Input sx={inputStyle} id="collection" aria-describedby="Collection" fullWidth />
            </Grid>
          </Grid>
        </>
      }
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '1rem' }}>
        <Button sx={{ marginX: '0.5rem'}} variant="outlined">Cancel</Button>
        <Button sx={{ marginX: '0.5rem'}} variant="contained">Create</Button>
      </Box>
    </>
  );
}