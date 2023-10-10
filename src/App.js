import logo from './logo.svg';
import './App.css';
import './components/Items'
import Item from './components/Items';
import Day from './components/Dayren';
import React,{useState} from 'react';

function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"2021"
    },
    {
      itemName:"Maggie",
      itemDate:"16",
      itemMonth:"July",
      itemYear:"2022"
    },
    {
      itemName:"Cold Drink",
      itemDate:"01",
      itemMonth:"March",
      itemYear:"2023"
    },
    {
      itemName:"Ice cream",
      itemDate:"23",
      itemMonth:"April",
      itemYear:"2022"
    }
  ];
  const [title, setTitle]=useState(response[0].itemName);
  function clickHandler(){
    console.log("Button clicked");
    setTitle("Priyam");
  }

  return (
    <div className="wrapper">
      <div className="parent">
      <div className="innerEliements">
      <Day dat={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Day>
      <button onClick={clickHandler}>Add to cart</button>
      <Item  name={title}></Item>
      </div>
      <div className="innerEliements">
      <Day dat={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Day>
      <Item name={response[1].itemName}></Item>
      </div>
      <div className="innerEliements">
      <Day dat={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Day>  
      <Item name={response[2].itemName}></Item>
      </div>
      <div className="innerEliements">
      <Day dat={response[3].itemDate} month={response[3].itemMonth} year={response[3].itemYear}></Day>
      <Item name={response[3].itemName}></Item>
      </div>
    </div>
    </div>
    
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      
  );
}

export default App;
