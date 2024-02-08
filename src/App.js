import { Routes,Route } from 'react-router';

import Navigation from './components/routes/navigation/navigation';
import Home from './components/routes/home/home';
import Shop from './components/routes/shop/shop';
import SignIn from './components/routes/sign-in/sign-in';

import './App.css';

const App = () => {  
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
