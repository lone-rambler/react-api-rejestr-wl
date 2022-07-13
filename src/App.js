import React from 'react'
import { GlobalStyles } from './components/Style.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage.js'
import SearchNIP from './components/SearchNIP.js'
import CheckNIPBankAccount from './components/CheckNIPBankAccount.js'

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
      <Route exact path='/' element={<Homepage />}></Route>
      <Route path='/search-nip' element={<SearchNIP />}></Route>
      <Route path='/check-nip-bank-account' element={<CheckNIPBankAccount />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
