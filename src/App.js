import './App.css';
import Logo from './Assets/plant_logo.png'


function App() {
  return (
    <div className='App'>
      <header className="Header">
        <h1 className='Title'>Landing Page</h1>
      </header>
      <div className="LayoutFragment">
        <img className='PlantLogo' src={Logo}/>
      </div>
      <div className="LayoutFragment CardsContainer">

        <div className="Card">
          <img src='https://www.laprensagrafica.com/__export/1612972245771/sites/prensagrafica/img/2021/02/10/doge.jpg_1902800913.jpg'/>
          <h2>This is a card.</h2>
          <p>This is the description asdas das dsadasd sassss sssss ssssss ssssssss ssssss ssssssss sss.</p>
        </div>
        <div className="Card">
          <img src='https://www.laprensagrafica.com/__export/1612972245771/sites/prensagrafica/img/2021/02/10/doge.jpg_1902800913.jpg'/>
          <h2>This is a card.</h2>
          <p>This is the description.</p>
        </div>
        <div className="Card">
          <img src='https://www.laprensagrafica.com/__export/1612972245771/sites/prensagrafica/img/2021/02/10/doge.jpg_1902800913.jpg'/>
          <h2>This is a card.</h2>
          <p>This is the description.</p>
        </div>
      </div>
      <div className="LayoutFragment">
        <h3>This is the 3rd Layout Fragment.</h3>
      </div>
      <div className="LayoutFragment">
        <h3>This is the 4th Layout Fragment.</h3>
      </div>
      <footer className="Footer">
        <p>This is the Footer.</p>
      </footer>
    </div>
  );
}

export default App;
