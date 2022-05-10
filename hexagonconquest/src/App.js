import logo from './logo.svg';
import './App.css';




function App() {

  
  return (
    <div className="fondo">
      Proyecto HexagonConquest
      <Tablero/>
    </div>
  );
}

export default App;

const Tablero = () => {

  return (
    <div className="tablero">
      <Casillas/>
    </div>
  )
}

const Casillas = () => {
  return (
    <div className ="filaCasillas">
    <Casilla/><Casilla/><Casilla/><Casilla/><Casilla/>
    </div>
  )
}

const Casilla = () => {

  const casilla = {
    aspectRatio: `1 / ${Math.sqrt(3)  / 2}`,
    backgroundColor: "lightgreen",
    clipPath: "polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    width: `${window.innerWidth/6}px`,
    position: "relative",
    border: "0",
    transform: "rotate(30deg)",
    display: "inline-block",
  }

  return (
    <button className="casilla" style={{}}></button>
  )
}