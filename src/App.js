import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Component/Home';
import Layout from './Component/Layout';
import DataMap from './Maping/DataMap';
import CartManager from './Page/CartManager';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<DataMap type="mobile"/>} />
          <Route path="/laptop" element={<DataMap type="laptop" />} />
          <Route path="/fashion" element={<DataMap type="fashion" />} />
          <Route path="/shoe" element={<DataMap type="shoe" />} />
          <Route path='/cart' element={<CartManager />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
