import React from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import Calculadora from './components/Calculadora';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Calculadora
      </Typography>
      <Calculadora />
    </Container>
  );
}

export default App;

