import FrogCard from './FrogCard'

export default function DisplayList(props) {
  return (
    <div>
      {props.list.map((frog, index) => (
        <FrogCard frog={frog} />
      ))}
    </div>
  );
}
