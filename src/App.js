// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import FilteredList from './FilteredList';
import DisplayList from './DisplayList';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const frogList = [
    { name: "Benny", weight: 5.8, size: "Does not fit in your palm", src: "images/Benny.jpg", description: "That's a frog alright! A rather average one at that, but still full of love."},
    { name: "Frogbert", weight: 3.4, size: "Does not fit in your palm", src: "images/Frogbert.jpg", description: "A little sluggish and loves naps. You can often find him dozing off by the water."},
    { name: "Prince", weight: 1.2, size: "Does fit in your palm", src: "images/Prince.jpg", description: "Small, but determined! Can often be seen rolling around objects much heavier than himself."},
    { name: "Big Man", weight: 6.9, size: "Does not fit in your palm", src: "images/Big Man.png", description: "One of the biggest frogs you will ever meet. His power is immeasurable."},
    { name: "Pop Tart", weight: 5.0, size: "Does fit in your palm", src: "images/Pop Tart.jpg", description: "Loves to hop around! Just be careful she doesn't jump onto your actual Pop Tarts."},
    { name: "Mochi", weight: 6.5, size: "Does not fit in your palm", src: "images/Mochi.jpg", description: "Extremely cute. She'll sometimes hop into your hands for some company."},
    { name: "Socks", weight: 3.7, size: "Does fit in your palm", src: "images/Socks.jpg", description: "Somehow, you can sometimes find him nestled in your drawers. You're not sure how he gets in there, but he seems very cozy, so you leave him be."},
    { name: "Frog and Toad", weight: 8.9, size: "Does not fit in your palm", src: "images/Frog-and-Toad.jpg", description: "Inseparable! If you choose one of them, you have to take the other too. The more the merrier!"},
    { name: "Gamer", weight: 2.1, size: "Does fit in your palm", src: "images/Gamer.jpg", description: "Has successfully completed Pokemon Red (somehow). Would love to watch speedruns with you!"},
    { name: "Jasmine", weight: 3.2, size: "Does fit in your palm", src: "images/Jasmine.jpg", description: "Very sweet. May croak a song for you if she's in a good mood."},
    { name: "Lily", weight: 5.4, size: "Does fit in your palm", src: "images/Lily.jpg", description: "Very polite and photogenic. There's a rainbow tint when the sun shines on her skin!"},
    { name: "Play Station 5", weight: 4.6, size: "Does not fit in your palm", src: "images/PS5.jpg", description: "A luxury only few can afford."},
  ]

  const [party, setParty] = useState({});
  const [list, setList] = useState([]);

  function addToParty(frog) {
    const newParty = { ...party };
    newParty[frog] = (newParty[frog] || 0) + 1;
    setParty(newParty);
  }

  function addToList(frog) {
    const newList = [...list, frog]
    setList(newList);
  }

  return (
    <div>
      <h1>Welcome, weary traveler!</h1>
      <p>You've come a long way. You must be tired, maybe even lonely traveling all this way on your own. Please take a companion &#40;or two, or three, or more&#41; to accompany you on the rest of your journey! While you add your little amphibian friends to your party, though, check the weight total at the bottom of the screen to make sure that you've got enough strength to carry them all.</p>
      <FilteredList list={frogList}/>
    </div>
  );
}

export default App;
