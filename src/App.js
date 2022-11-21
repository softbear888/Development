// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import FilteredList from './FilteredList';
import DisplayList from './DisplayList';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from '@mui/material';
import Benny from './images/Benny.jpg';
import Frogbert from './images/Frogbert.jpg'
import FrogAndToad from './images/Frog-and-Toad.jpg'
import Prince from './images/Prince.jpg'
import Socks from './images/Socks.jpg'
import PopTart from './images/Pop Tart.jpg'
import Gamer from './images/Gamer.jpg'
import Jasmine from './images/Jasmine.jpg'
import PS5 from './images/PS5.jpg'
import Lily from './images/Lily.jpg'
import BigMan from './images/Big Man.png'
import Mochi from './images/Mochi.jpg'

function App() {
  const [party, setParty] = useState([]);
  const [weight, setWeight] = useState(0);
  //const [list, setList] = useState([]);

  const frogList = [
    { name: "Benny", weight: 5.8, size: "Does not fit in your palm", src: Benny, description: "That's a frog alright! A rather average one at that, but still full of love." },
    { name: "Frogbert", weight: 3.4, size: "Does not fit in your palm", src: Frogbert, description: "A little sluggish and loves naps. You can often find him dozing off by the water." },
    { name: "Prince", weight: 1.2, size: "Does fit in your palm", src: Prince, description: "Small, but determined! Can often be seen rolling around objects much heavier than himself." },
    { name: "Big Man", weight: 6.9, size: "Does not fit in your palm", src: BigMan, description: "One of the biggest frogs you will ever meet. His power is immeasurable." },
    { name: "Pop Tart", weight: 5.0, size: "Does fit in your palm", src: PopTart, description: "Loves to hop around! Just be careful she doesn't jump onto your actual Pop Tarts." },
    { name: "Mochi", weight: 6.5, size: "Does not fit in your palm", src: Mochi, description: "Extremely cute. She'll sometimes hop into your hands for some company." },
    { name: "Socks", weight: 3.7, size: "Does fit in your palm", src: Socks, description: "Somehow, you can sometimes find him nestled in your drawers. You're not sure how he gets in there, but he seems very cozy, so you leave him be." },
    { name: "Frog and Toad", weight: 8.9, size: "Does not fit in your palm", src: FrogAndToad, description: "Inseparable! If you choose one of them, you have to take the other too. The more the merrier!" },
    { name: "Gamer", weight: 2.1, size: "Does fit in your palm", src: Gamer, description: "Has successfully completed Pokemon Red (somehow). Would love to watch speedruns with you!" },
    { name: "Jasmine", weight: 3.2, size: "Does fit in your palm", src: Jasmine, description: "Very sweet. May croak a song for you if she's in a good mood." },
    { name: "Lily", weight: 5.4, size: "Does fit in your palm", src: Lily, description: "Very polite and photogenic. There's a rainbow tint when the sun shines on her skin!" },
    { name: "Play Station 5", weight: 4.6, size: "Does not fit in your palm", src: PS5, description: "A luxury only few can afford." }
  ]

  const removeFrog = name => {
    setParty(party.filter((frog) => name !== frog.name));
  };

  const updateWeight = () => {
    let sum = 0;
    party.forEach(i => Number(sum += i.weight));
    setWeight(sum);
  }

  useEffect(() => {
    updateWeight();
  }, [party]);

  return (
    <div>
      <div className="left-col">
        <h1>Welcome, weary traveler!</h1>
        <p>You've come a long way. You must be tired, maybe even lonely traveling all this way on your own. Please take a companion &#40;or two, or three, or more&#41; to accompany you on the rest of your journey! While you add your amphibian friends to your party, though, check the weight total to the right to make sure that you've got enough strength to carry them all.</p>
        <FilteredList list={frogList} onClick={setParty} party={party}/>
      </div>
      <div className="right-col">
        <div>
        <h1>Party</h1>
        {party.map(e =>
          <div>
            <p>{e.name}</p>
            <Button variant="contained" onClick={()=>removeFrog(e.name)}>Remove</Button>
          </div>
        )}
        </div>
        <p>Total Weight: {weight}</p>
      </div>
    </div>
  );
}

export default App;
