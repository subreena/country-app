import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
useEffect( () => {
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data =>{
  console.log(data);
  setCountries(data);
 const name = data.map(country => country.name)
 console.log(name);
})
.catch( error => console.log(error))
},[])



  return (
    <div className="App">
      <header className="App-header">
  <h1>{countries.length} Countries</h1>
 { countries.map((country) => <Country country={country} key={country.alpha3Code}></Country>)}
  </header>
    </div>
  );
 
}

export default App;
