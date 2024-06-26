import { Routes,Route } from 'react-router';

import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Shop from './routes/shop/shop';
import Authentication from './routes/authentication/authentication';
import Checkout from './routes/checkout/checkout';

import './App.css';

const App = () => {  
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='authentication' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
