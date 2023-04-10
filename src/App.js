import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [person, setperson] = useState({
  FullName:"Dhouha Sagga",
  Bio:"Student",
  imgSrc:"me.jpg",
  Profession:"Fullstack Js",
 });
 const [show, setshow] = useState(true);
  return (
    <div className='app'>
     { show?(<div>
      <h1>{person.FullName}</h1>
      <img src={person.imgSrc}/>
      <h2>{person.Bio}</h2>
      <input type='text' onChange={(e)=> setperson({...person, Bio:e.target.value})}/>
      <h2>{person.Profession}</h2>
      <input type='text' onChange={(e)=> setperson({...person, Profession:e.target.value})}/>
      <br></br>
      </div>):null}
      <button onClick={()=>setshow(!show)}> Click Here to show student</button>
    </div>
  );
}

export default App;
