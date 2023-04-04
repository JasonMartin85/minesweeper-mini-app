import './App.css'
import {useEffect,useState} from 'react'

export default function Board(props) {
  const [toggle,setToggle] = useState(false);

  useEffect(()=>{

  },[toggle])



  const locationClicked = (obj) => {
    obj.wasClicked = true;
    if (obj.isBomb)
      alert('BOOOOOOM!')
    
    let tempArray = []
    
    props.board.map(
        row => row.map(obj => {
          if(obj.wasClicked === true) {
            tempArray.push(obj.num)
          }} 
          
          )
      ) 
    setToggle(!toggle)
    // console.log(tempArray)

      }

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
                     <img className="bombImage" src="./bomb.png"/> 
                     : obj.wasClicked === true ? <span>{obj.adjacentBombCount}</span>: <></>}
                     
                    
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
