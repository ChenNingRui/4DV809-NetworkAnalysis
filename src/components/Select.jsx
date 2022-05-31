import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo({label, options}) {
  return (
    <Box sx={{ minWidth: '100%' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'value',
            id: 'uncontrolled-native',
          }}
        >
          {options.map((value) => {
             return <option key={value} value={value}>{value}</option>
          })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
