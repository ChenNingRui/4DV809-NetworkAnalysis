import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { drawerWidth } from '../pages/HomePage';
import GraphControlPanel from './GraphControlPanel';

import {DrawerHeader} from '../styleComponents/DrawerStyle';
// import { Button } from '@mui/material';

export default function BasicDrawer(props){
    const theme = useTheme();

    const {open, setOpen, 
          dataOne, dataTwo,
          episodesSelectedOne, 
          episodesSelectedTwo, 
          setEpisodesSelectedOne, 
          setEpisodesSelectedTwo,
          setKcoreOne,
          setCommunityOne,
          setVisStyleOne,
          setKcoreTwo,
          setCommunityTwo,
          setVisStyleTwo} = props;

    const handleDrawerClose = () => {
      setOpen(false);
      };

    return(
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
          <GraphControlPanel label={'Graph One'}
            data={dataOne}
            episodesSelected={episodesSelectedOne} 
            setEpisodesSelected={setEpisodesSelectedOne}
            setKcore={setKcoreOne}
            setCommunity={setCommunityOne}
            setVisStyle={setVisStyleOne}/>
        <Divider />
          <GraphControlPanel label={'Graph Two'}
            data={dataTwo}
            episodesSelected={episodesSelectedTwo}
            setEpisodesSelected={setEpisodesSelectedTwo}
            setKcore={setKcoreTwo}
            setCommunity={setCommunityTwo}
            setVisStyle={setVisStyleTwo}/>
        {/* <Button variant="contained" sx={{m:1}} onClick={()=> setUpdate(true)}>{'Update'}</Button> */}
      </Drawer>
    );
}