import React from 'react';
import './App.css';
import ListUsers from "../src/componets/ListUsers.js" 
import ListUsersTransactions from '../src/componets/ListUsersTransactions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListUsers />} /> 
            <Route path="/transactions/:id" element={<ListUsersTransactions />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;

