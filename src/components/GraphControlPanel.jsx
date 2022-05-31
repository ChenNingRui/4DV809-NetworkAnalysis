import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EpisodeList from './EpisodeList';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function GraphControlPanel(props) {
    const {
        label,
        data, 
        episodesSelected, 
        setEpisodesSelected,
        setKcore,
        setCommunity,
        setVisStyle} = props;

    function handleKcoreChange(event){
        setKcore(event.target.value);
    }

    function handleCommunityChange(event){
        setCommunity(event.target.value);
    }

    function handleVisStyleeChange(event){
        setVisStyle(event.target.value);
    }

    return(
        <List>
            <ListItem>
                <Typography gutterBottom variant="h4" component="div">
                {label}
                </Typography>
            </ListItem>
            {['density', 'node', 'edge', 'is_weighted'].map((text,index) => {
            return (
                <Box key={index}>
                <ListItem>
                    <Typography sx={{fontSize: 12}} gutterBottom component="p"> {text + ': ' + data[text]}</Typography>
                </ListItem>
                <Divider variant="middle" />
                </Box>
            );})}
            <ListItem>
                <EpisodeList episodesSelected={episodesSelected} setEpisodesSelected={setEpisodesSelected}/>
            </ListItem>
            <ListItem>
                <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {'Community'}
                </InputLabel>
                <NativeSelect defaultValue={'Normal'} onChange={handleCommunityChange}>
                    {['Normal', 'Label Propagation', 'Louvain Partition'].map((item)=>{
                        return <option key={item} value={item}>{item}</option>
                    })}
                </NativeSelect>
            </FormControl>
            </ListItem>
            <ListItem>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {'K-core'}
                </InputLabel>
                <NativeSelect defaultValue={0} onChange={handleKcoreChange}>
                    {[0, 2, 4, 6].map((item)=>{
                        return <option key={item} value={item}>{item}</option>
                    })}
                </NativeSelect>
            </FormControl>
            </ListItem>
            <ListItem>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {'PageRank & Betweenness'}
                </InputLabel>
                <NativeSelect defaultValue={'Normal'} onChange={handleVisStyleeChange}>
                    {['Normal', 'PageRank', 'Betweenness'].map((item)=>{
                        return <option key={item} value={item}>{item}</option>
                    })}
                </NativeSelect>
            </FormControl>
            </ListItem>
        </List>
    );
}