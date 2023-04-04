import Board from './Board.js'
import {useState, useEffect} from 'react'

const App = () => {
  // const box = [
    
    // ]
    
      class CellObject {
        constructor(num,isBomb) {
          this.num = num
          this.wasClicked = false
          this.isBomb = isBomb
          this.adjacentBombCount = 0
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
        // cellObject.num = counter
        // if (bombLocations.includes(cellObject.num)) {
        //   cellObject.isBomb = true;
        // }


        rowArray.push(new CellObject(counter,bombLocations.includes(counter)))
        counter++
      }
      newBoard.push(rowArray)
    }
    setBoard(newBoard)





    setBombs(bombLocations)
    console.log(bombLocations)

  
  },[])

  return (
    <div>
      <h1>Minesweeper!</h1>
      {console.log(board)}
      {board ? <Board board={board}/> : <>Loading!</>}
    </div>
  )

}

export default App;