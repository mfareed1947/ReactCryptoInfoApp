import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/Coins';
import CoinsDetails from './Components/CoinDetails';
import Exchanges from './Components/Exchanges';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/coins' element={<Coins />} />
        <Route exact path='/exchanges' element={<Exchanges />} />
        <Route exact path='/coin/:id' element={<CoinsDetails />} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
