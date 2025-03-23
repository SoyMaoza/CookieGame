import "./Home.css";
import LeftContainer from "../Components/home/LeftContainer/LeftContainer";
import CentralContainer from "../Components/home/CentralContainer/CentralContainer";
import RightContainer from "../Components/home/RightContainer/RightContainer";
import { useState } from "react";

const Home = () => {
  const [puntos, SetPuntos] = useState(0);
    const [clicks, setClicks]=useState(1);


  const actualClicks = () => {
    SetPuntos((prevPuntos)=> prevPuntos + clicks)
  };


  const comprar = (precio, click) => {
    if (puntos >= precio) {
        SetPuntos(puntos-precio);
        setClicks(clicks + click)
    }
  };

  return (
    <div className="home">
      <div className="home-title">
        <h3 className="title-text">COOKIE GAME</h3>
      </div>
      <div style={{ fontSize: 50 }}> Monedas: {puntos}</div>
      <div className="main-content">
        <div className="left-containers-wrapper">
          <LeftContainer
            clicks={2}
            precio={30}
            comprar={() => comprar(30, 2)}
          />
          <LeftContainer clicks={3} precio={50} comprar={()=> comprar( 50, 3)}
          />
          <LeftContainer clicks={5} precio={75} comprar={()=> comprar( 75, 5)}/>
          <LeftContainer clicks={10} precio={150} comprar={()=> comprar( 150, 10)}/>

        </div>
        <CentralContainer click={actualClicks} />
        <RightContainer />
      </div>
    </div>
  );
};

export default Home;
