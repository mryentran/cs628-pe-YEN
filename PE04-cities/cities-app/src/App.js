import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; // import NavLink
import AddCity from './AddCity';
import CitiesList from './CitiesList';
import CityDetail from './CityDetail';

function App() {
  const [cities,setCities]=useState([])
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
           <h1 className="app-header">Cities Application</h1>
            <ul>
              {/* Use NavLink instead of Link */}
              <li>
                <NavLink to="/" activeClassName="active">Cities List</NavLink>
              </li>
              <li>
                <NavLink to="/add-city" activeClassName="active">Add City</NavLink>
              </li>
            </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
        <Route path="/" element={<CitiesList cities={cities}/>}>
          <Route path="city/:id" element={<CityDetail/>}/>
        </Route>
        <Route path="/add-city" element={<AddCity setCities={setCities}/>}/>
        </Routes>

      </div>
    
    </BrowserRouter>
  );
}

export default App;
