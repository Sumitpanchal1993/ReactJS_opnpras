import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './CommonComponents/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import Footer from './CommonComponents/Footer';
import Copyright from './CommonComponents/Copyright';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/product' element={<Products />}></Route>
        </Routes>
        <Footer/>
        <Copyright/>
      </Router>
    </>
  );
}

export default App;
