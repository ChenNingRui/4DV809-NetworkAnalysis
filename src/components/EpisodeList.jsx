import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

export default function CheckboxListSecondary(props) {
  const {episodesSelected, setEpisodesSelected} = props;
  const [checked, setChecked] = React.useState(episodesSelected.split("").map((i) => Number(i)));

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      if(newChecked.length > 1){
        newChecked.splice(currentIndex, 1);
      }
    }

    newChecked.sort();
    setEpisodesSelected(newChecked.join(''));
    setChecked(newChecked);
  };

  return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography sx={{fontSize: 12}} component="p"> {'Episode Selection'}</Typography>
            <List dense sx={{ width: '100%'}}>
            {[1, 2, 3, 4, 5, 6, 7].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                <ListItem
                    key={value}
                    secondaryAction={
                    <Checkbox
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    }
                    disablePadding
                >
                    <ListItemButton>
                    <ListItemText id={labelId} primary={`Episode ${value}`} />
                    </ListItemButton>
                </ListItem>
                );
            })}
            </List>
        </Box>
        );
}
