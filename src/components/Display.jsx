import React from 'react';
import { TextField } from '@mui/material';

function Display({ input, result }) {
  return (
    <div className="display">
      <TextField
        label="ENTRADA"
        variant="outlined"
        value={input}
        InputProps={{
          readOnly: true,
        }}
        fullWidth
        margin="dense"
      />
      <TextField
        label="RESULTADO"
        variant="outlined"
        value={result}
        InputProps={{
          readOnly: true,
        }}
        fullWidth
        margin="dense"
      />
    </div>
  );
}

export default Display;