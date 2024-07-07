import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container} from 'react-bootstrap';
import './App.css';
import NavbarComponent from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';
import CartProvider from './CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
    <Container>
   <NavbarComponent />
   

   <Routes>
<Route exact path ="https://Apastar16.github.io/ShoppyKart/" element={<Store />}/>
<Route path="/success" element={<Success/>}/>
<Route path="/cancel" element={<Cancel/>}/>

   </Routes>
  
   </Container>
   </BrowserRouter>
   </CartProvider>
  );
}

export default App;
