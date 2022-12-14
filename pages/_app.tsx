import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MeshProvider } from '@martifylabs/mesh-react'
MeshProvider
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ListItemButton, ListItem, Link, Avatar, Menu, Tooltip, MenuItem, createTheme, ThemeProvider, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const drawerWidth = 240;
const settings = ['Profile', 'Logout'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App({ Component, pageProps }: AppProps) {
	// Sidebar drawer
	const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
	// User profile icon
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardano = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

	const THEME = createTheme({
		typography: {
		 "fontFamily": `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
		 "fontSize": 20
		}
 });

	return (
		<ThemeProvider theme={THEME}>
			<MeshProvider>
				<Box sx={{ display: 'flex' }}>
					<CssBaseline />
					<AppBar position="fixed" open={open} sx={{ background: '#01163F' }}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								edge="start"
								sx={{ mr: 2, ...(open && { display: 'none' }) }}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
								
							</Typography>
							<Box sx={{ flexGrow: 0 }}>
									<Button
										id="demo-customized-button"
										aria-controls={openCardano ? 'demo-customized-menu' : undefined}
										aria-haspopup="true"
										aria-expanded={openCardano ? 'true' : undefined}
										variant="contained"
										disableElevation
										onClick={handleClick}
										startIcon={<KeyboardArrowDownIcon />}
									>
										650 ADA
									</Button>
									<Menu
										id="demo-customized-menu"
										MenuListProps={{
											'aria-labelledby': 'demo-customized-button',
										}}
										anchorEl={anchorEl}
										open={openCardano}
										onClose={handleClose}
									>
										<MenuItem onClick={handleClose} disableRipple>
											Edit
										</MenuItem>
										<MenuItem onClick={handleClose} disableRipple>
											Duplicate
										</MenuItem>
										<Divider sx={{ my: 0.5 }} />
										<MenuItem onClick={handleClose} disableRipple>
											Archive
										</MenuItem>
										<MenuItem onClick={handleClose} disableRipple>
											More
										</MenuItem>
									</Menu>
								<Tooltip title="Open settings">
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
									</IconButton>
								</Tooltip>
								<Menu
									sx={{ mt: '45px' }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{settings.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseUserMenu}>
											<Typography textAlign="center">{setting}</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
						</Toolbar>
					</AppBar>
					<Drawer
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							'& .MuiDrawer-paper': {
								width: drawerWidth,
								boxSizing: 'border-box',
								background: '#011335',
								color: '#FEFEFE'
							},
						}}
						variant="persistent"
						anchor="left"
						open={open}
					>
						<DrawerHeader>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: '#FEFEFE' }} /> : <ChevronRightIcon sx={{ color: '#FEFEFE' }} />}
							</IconButton>
						</DrawerHeader>
						<List>
							<ListItem disablePadding>
								<ListItemButton>
									<Link href={'/home'} color='inherit' underline='none' variant='subtitle1'>Home</Link>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<Link href={'/releases'} color='inherit' underline='none' variant='subtitle1'>New Releases</Link>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<Link href={'/artboardz'} color='inherit' underline='none' variant='subtitle1'>Artboardz</Link>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<Link href={'/leaderboardz'} color='inherit' underline='none' variant='subtitle1'>Leaderboardz </Link>
								</ListItemButton>
							</ListItem>
						</List>
						<Box sx={{ marginTop: 'auto', padding: '2rem' }}>
							<Stack direction={'row'} spacing={1}>
								<AiOutlineTwitter size={28} />
								<FaDiscord size={28} />
								<TbWorld size={28} />
							</Stack>
						</Box>
					</Drawer>
					<Main open={open}>
						<DrawerHeader />
						<Box
							sx={{
								position: 'fixed',
								width: '1323px',
								height: '1996px',
								left: '40%',
								top: '700px',
								background: 'radial-gradient(75.93% 75.93% at 13.92% 23.07%, #0056FF 0%, #FF3800 100%)',
								filter: 'blur(250px)',
								flex: 'none',
								order: 0,
								flexGrow: 0,
								zIndex: -1,
							}}
						/>
						<Component {...pageProps} />
					</Main>
				</Box>
			</MeshProvider>
		</ThemeProvider>
		
	)
}
