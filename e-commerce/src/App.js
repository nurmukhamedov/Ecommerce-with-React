import React, {Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Sidebar, Footer} from './components';

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'

function App() {
  return (
     <Router>
         <Fragment>
            <Navbar/>
          <Sidebar/> 
             <Routes>
               <Route path = '/' element={ <Home/> }/>
               <Route path = '/about' element = { <About/> } />
               <Route path = '/cart' element = { <Cart/> } />
               <Route path = '/products' element = { <Products/> } />
               <Route path = '/products/:id' element = { <SingleProduct/> } />
               <Route path = '*' element = { <Error/> } />
             </Routes>   
             <Footer/>
         </Fragment>
     </Router>
  );
}

export default App;
