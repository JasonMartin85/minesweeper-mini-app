import './App.css'

export default function Board(props) {
  return (
    <div >
      <div className="container">
        {props.board.map((row, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className="row"
            >
              {row.map((num, numIndex) => {
                return (
                  <span
                    key={numIndex}
                    className="col"
                    className="num"
                  >
                    {num}
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
