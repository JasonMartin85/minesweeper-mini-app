import Board from './Board.js'
import React, {useState, useEffect} from 'react'

const App = () => {

    function adjacentBombs(index,bombLocations) {
      let adjacent = []
      const col = 10;
      const row = 10;

      const leftEdge = index % col === 1
      const rightEdge = (index + 1) % col === 1
      const topEdge = Math.floor(index / col) === 0
      const bottomEdge = (index === col*row ? row-1 : Math.floor(index / col)) === (row - 1)

      if (! leftEdge) adjacent.push( index - 1)
      if (! rightEdge) adjacent.push( index + 1)
      if (! topEdge) adjacent.push( index - col)
      if (! bottomEdge) adjacent.push( index + col)
      if (! leftEdge && !topEdge) adjacent.push( (index - 1) - col)
      if (! rightEdge && !topEdge) adjacent.push( (index + 1) - col)
      if (! leftEdge && !bottomEdge) adjacent.push( (index - 1) + col)
      if (! rightEdge && !bottomEdge) adjacent.push( (index + 1) + col)

      console.log("Index",index,"Adjacent",adjacent)
      console.log("Index",index,"left",!leftEdge,"right",!rightEdge,"top",!topEdge,"bottom",!bottomEdge)
      console.log("Index",index,"left",index % col,"right",(index + 1) % col,"top",Math.floor(index / col),"bottom",Math.floor(index / col),"=",row-1)
      //console.log('index',index,adjacent.filter(cell => bombLocations.includes(cell)))
      

      return(adjacent.filter(cell => bombLocations.includes(cell)).length)

    }
    
      class CellObject {
        constructor(num,isBomb,adjacentBombCount) {
          this.num = num
          this.wasClicked = false
          this.isBomb = isBomb
          this.adjacentBombCount = adjacentBombCount
        }
      }

  const [board, setBoard] = useState()
  const [bombs, setBombs] = useState()



  useEffect(()=>{
    const newBoard = []; 
    let bombLocations = [];
    let counter = 1;

    while(bombLocations.length < 25) {
      bombLocations.push(Math.floor(Math.random() * 100) + 1)
      bombLocations = [...new Set(bombLocations)]
    }

    for (let row = 0; row < 10; row++) {
      let rowArray = []
      for (let col = 0; col < 10; col++){
        rowArray.push(
          new CellObject(
            counter,
            bombLocations.includes(counter),
            adjacentBombs(counter,bombLocations)))
        counter++
      }
      newBoard.push(rowArray)
    }

    setBoard(newBoard)
    setBombs(bombLocations)
  
  },[])

  return (
    <div>
      <h1>Minesweeper!</h1>
      {board ? <Board board={board}/> : <>Loading!</>}
    </div>
  )

}

export default App;