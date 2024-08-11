import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import Softwareapp from './Components/Softwareapp';
import Onlinestore from './Components/Onlinestore';
import Online from './Components/Online';
import Hire from './Components/Hire';
import Education from './Components/Education';
import Medical from './Components/Medical';
import Shop from './Components/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/software-application" element={<Softwareapp />} />
                <Route path="/online-service" element={<Online />} />
                <Route path="/hire-smart-assistant" element={<Hire />} />
                <Route path="/education" element={<Education />} />
                <Route path="/medical" element={<Medical />} />
                <Route path="/online-store" element={<Onlinestore />} />
              </Routes>
            </>
          }
        />
          <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
