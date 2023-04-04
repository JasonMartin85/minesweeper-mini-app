import './App.css'
import React, {useEffect,useState} from 'react'
import {bombContext} from "./App.js"

export default function Board(props) {
  const [toggle,setToggle] = useState(false);
  const {gameState, setGameState} = React.useContext(bombContext)
  

  useEffect(()=>{
    
  },[toggle])
  
  
  
  const locationClicked = (obj) => {
    obj.wasClicked = true;

    setToggle(!toggle)
    if (obj.isBomb) {
      setTimeout(()=>alert('BOOOOOOM!'),0)
      setGameState(false)
    }

    console.log(obj.adjArray)
    
    let tempArray = []
    
    props.board.map(
        row => row.map(obj => {
          if(obj.wasClicked === true) {
            tempArray.push(obj.num)
          }} 
          
          )
      ) 

    // console.log(tempArray.length)

    }
  
  useEffect(()=>{
    if(gameState === false) {
      props.board.forEach(
        row => row.forEach(obj => {
            obj.wasClicked = true
          })
      )}
      setToggle(!toggle)
  },[gameState])
  
  
  return (
    <div >
      <div className="container">
        {props.board.map((row, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className="row"
            >
              {row.map((obj, numIndex) => {
                return (
                  <span
                    key={numIndex}
                    className="num"
                    onClick={()=>locationClicked(obj)}
                  >
                    {obj.isBomb ?
                     obj.wasClicked===true   ? <img className="bombImage" src="./bomb.png"/> : <span></span> 
                     : obj.wasClicked===true  ? <span>{obj.adjacentBombCount}</span>: <></>}
                     
                    
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
