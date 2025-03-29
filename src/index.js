import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Layout from './Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import Rates from './pages/rates';
import Services from './pages/services';
import Transload from './pages/transload';
import Trucking from './pages/trucking';
import Unload from './pages/unload';


function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />}/>
          <Route path="trucking" element={<Trucking />}/>
          <Route path="transload" element={<Transload />}/>
          <Route path="unload" element={<Unload />}/>
          <Route path="rates" element={<Rates />}/>

          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);