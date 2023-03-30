import './App.css';
import { Route,Routes } from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries';
import Info from './components/Info/Info';

function App() {
  return (
    <>
  
<header className='header'>
<div className='container'>
<h5>
  Find the Country Flag
</h5>
</div>
</header>

<div className='container'></div>
    <Routes>
<Route path='/' element={<AllCountries />}></Route>
<Route path="/country/:countryName" element={<Info />}></Route>

    </Routes>
   </>
  );
}

export default App;
