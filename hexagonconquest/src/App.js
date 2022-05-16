import logo from './logo.svg';
import './App.css';
import CasillaCanvas from './components/CasillaCanvas'


function App() {

          // Dos modos:   usando HTML y CSS   <Tablero>
          //              usando HTML Canvas  <CasillaCanvas>
  return (
    <div className="fondo">
      Proyecto HexagonConquest
      <CasillaCanvas/> 
    </div>
  );
}

export default App;

const Tablero = () => {

  const renderCasilla = () => {
    return (
      <Casilla/>
    )
  }

  return (
    <div className="tablero">
      <div className="filaCasillas">
        {renderCasilla()}{renderCasilla()}{renderCasilla()}
      </div>
      <div className="filaCasillas">
        {renderCasilla()}{renderCasilla()}{renderCasilla()}{renderCasilla()}
      </div>
      <div className="filaCasillas">
        {renderCasilla()}{renderCasilla()}{renderCasilla()}{renderCasilla()}{renderCasilla()}
      </div>
      <div className="filaCasillas">
        {renderCasilla()}{renderCasilla()}{renderCasilla()}{renderCasilla()}
      </div>
      <div className="filaCasillas">
        {renderCasilla()}{renderCasilla()}{renderCasilla()}
      </div>
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