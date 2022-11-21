import { Button, ListItemButton, ListItemText, List } from '@mui/material';
import Benny from './images/Benny.jpg';

export default function FrogCard(props) {
  const frog = props.frog;
  const addToParty = props.onClick;
  const party = props.party;

  const addFrogToParty = () => {
    addToParty([...party, frog]);
  }

  return (
    <div className = "frog-div">
      <img src={frog.src} alt="Alt text"/>
      <h3>{frog.name}</h3>
      <h5>{frog.weight} lbs</h5>
      <h5>{frog.size}</h5>
      <p>{frog.description}</p>
      <Button variant="contained" onClick={addFrogToParty}>Add to Party</Button>
    </div>
  );
}