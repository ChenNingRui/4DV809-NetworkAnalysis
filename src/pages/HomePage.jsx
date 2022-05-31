import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerHeader } from '../styleComponents/DrawerStyle';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import VisulizationPanel from '../components/VisualizationPanel';

export const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

export default function PersistentDrawerRight(props) {
  const [open, setOpen] = React.useState(false);
  const {
    dataOne,
    dataTwo,
    filterListOne,
    setFilterListOne,
    filterListTwo,
    setFilterListTwo,
    episodesSelectedOne, 
    episodesSelectedTwo, 
    setEpisodesSelectedOne, 
    setEpisodesSelectedTwo, 
    setUpdate,
    kcoreOne, 
    setKcoreOne,
    communityOne,
    setCommunityOne,
    visStyleOne,
    setVisStyleOne,
    kcoreTwo, 
    setKcoreTwo,
    communityTwo,
    setCommunityTwo,
    visStyleTwo,
    setVisStyleTwo,
  } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} setOpen={setOpen}/>
      <Main open={open}>
        <DrawerHeader />
        <Drawer
          dataOne={dataOne}
          dataTwo={dataTwo}
          open={open} 
          setOpen={setOpen}
          episodesSelectedOne={episodesSelectedOne} 
          episodesSelectedTwo={episodesSelectedTwo}
          setEpisodesSelectedOne={setEpisodesSelectedOne}
          setEpisodesSelectedTwo={setEpisodesSelectedTwo}
          setUpdate={setUpdate}
          setKcoreOne={setKcoreOne}
          setCommunityOne={setCommunityOne}
          setVisStyleOne={setVisStyleOne}
          setKcoreTwo={setKcoreTwo}
          setCommunityTwo={setCommunityTwo}
          setVisStyleTwo={setVisStyleTwo}
          />
        <VisulizationPanel 
          dataOne={dataOne} 
          dataTwo={dataTwo} 
          filterListOne={filterListOne}
          setFilterListOne={setFilterListOne}
          filterListTwo={filterListTwo}
          setFilterListTwo={setFilterListTwo}
          kcoreOne={kcoreOne} 
          communityOne={communityOne} 
          visStyleOne={visStyleOne}
          kcoreTwo={kcoreTwo} 
          communityTwo={communityTwo} 
          visStyleTwo={visStyleTwo}
          />
      </Main>
    </Box>
  );
}
