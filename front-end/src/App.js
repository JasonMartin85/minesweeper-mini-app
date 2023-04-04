import Board from './Board.js'
import {useState, useEffect} from 'react'

const App = () => {
  // const box = [

  // ]

  const [board, setBoard] = useState()

  useEffect(()=>{
    const newBoard = [];
    let counter = 1;
    for (let row = 0; row < 10; row++) {
      let rowArray = []
      for (let col = 0; col < 10; col++){
        rowArray.push(counter)
        counter++
      }
      newBoard.push(rowArray)
    }

    setBoard(newBoard)
  },[])

  return (
    <div>
      <h1>Minesweeper!</h1>
      {board ? <Board board={board}/> : <>Loading!</>}
    </div>
  )

}

export default App;