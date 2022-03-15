import Header from './Components/Header';
import LayoutFragment from './Components/LayoutFragment.js';
import Footer from './Components/Footer';
import Card from './Components/Card';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Header/>
      <LayoutFragment/>
      <Card className='Card'/>
      <Card className='Card'/>
      <Card className='Card'/>
      <Footer/>
    </div>
  );
}

export default App;
