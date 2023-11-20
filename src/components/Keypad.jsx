import React from 'react';
import { ButtonGroup, Button, Grid } from '@mui/material';

function Keypad({ handleInput, handleClear, handleCalculate }) {
  return (
    <div className="keypad">
      <ButtonGroup
        variant="outlined"
        fullWidth
        aria-label="calculator keypad"
        size="large"
      >
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('1')}>1</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('2')}>2</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('3')}>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('4')}>4</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('5')}>5</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('6')}>6</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('7')}>7</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('8')}>8</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('9')}>9</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('0')}>0</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('+')}>+</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('-')}>-</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('*')}>*</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('/')}>/</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={handleClear}>Clear</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={handleCalculate}>=</Button>
          </Grid>
          {/* <Grid item xs={3}>
            <Button onClick={() => handleInput('sqrt(')}>√</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('pow(')}>x^i</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('sin(')}>sin</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('cos(')}>cos</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('tan(')}>tan</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('log(')}>log</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('exp(')}>exp</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('(')}>(</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput(')')}>)</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleInput('pi')}>π</Button>
          </Grid> */}
        </Grid>
      </ButtonGroup>
    </div>
  );
}

export default Keypad;