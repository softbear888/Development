import './App.css';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Aggregator(props) {
  const { party, setParty, weight } = props;

  const removeFrog = name => {
    setParty(party.filter((frog) => name !== frog.name));
  };

  return (
    <div>
      <h1>Party</h1>
      {party.map(e =>
        <div className="party-item">
          <p className="party-title">{e.name}</p>
          <Button variant="contained" onClick={()=>removeFrog(e.name)}>Remove</Button>
        </div>
      )}
      <p>Total Weight: {weight} lbs</p>
    </div>
  )
}
