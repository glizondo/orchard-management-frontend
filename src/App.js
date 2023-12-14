import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SubHeader from './components/subheaders/SubHeader';
import Popup from './components/PopUp';
import Dashboard from "./components/Dashboard";
import TreeList from "./components/TreeList";
import Account from "./components/Account";
import './Styles.css';

function App() {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const handlePopUpClick = () => setPopUpVisible(!popUpVisible);
  const handleBodyChange = (page) => {
    setSelectedPage(page);
    setPopUpVisible(false);
  };

  return (

    <Router>
      <div>
        <Header onBodyChange={handleBodyChange} onPopUpClick={handlePopUpClick} />
        {popUpVisible && <Popup onBodyChange={handleBodyChange} />}
        <SubHeader bodyName={selectedPage} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Trees" element={<TreeList />} />
          <Route path="Account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
