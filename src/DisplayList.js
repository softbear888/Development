import FrogCard from './FrogCard';
import Benny from './images/Benny.jpg';

export default function DisplayList(props) {
  return (
    <div>
      {props.list.map((frog, index) => (
        <FrogCard frog={frog} />
      ))}
    </div>
  );
}
