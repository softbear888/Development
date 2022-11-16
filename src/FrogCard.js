import { Button } from '@mui/material';

export default function FrogCard(props) {
  return (
    <div>
      <img src={props.frog.src} alt="Alt text"/>
      <h3>{props.frog.name}</h3>
      <h5>{props.frog.weight} lbs</h5>
      <h5>{props.frog.size}</h5>
      <p>{props.frog.description}</p>
      <Button variant="contained">Add to Party</Button>
    </div>
  );
}
