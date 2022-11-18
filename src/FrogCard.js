import { Button, ListItemButton, ListItemText, List } from '@mui/material';
import Benny from './images/Benny.jpg';

export default function FrogCard(props) {
  const frog = props.frog;
  const addToParty = props.onClick;
  const party = props.party;

  const addFrogToParty = () => {
    addToParty([...party, frog]);
  }

  const removeFrogFromParty = () => {
    const createEntry = (m) => {
    return (
      <ListItemButton onClick={() => props.remove(m.key)}>
        <ListItemIcon>
          <PetsIcon />
        </ListItemIcon>
        <ListItemText>{m.text}</ListItemText>
      </ListItemButton>
    );
  };
    const mData = props.m;
    const listM = mData.map(createEntry);
    return <List>{listM}</List>;
  }

  return (
    <div>
      <img src={props.frog.src} alt="Alt text"/>
      <h3>{props.frog.name}</h3>
      <h5>{props.frog.weight} lbs</h5>
      <h5>{props.frog.size}</h5>
      <p>{props.frog.description}</p>
      <Button variant="contained" onClick={addFrogToParty}>Add to Party</Button>
    </div>
  );
}
