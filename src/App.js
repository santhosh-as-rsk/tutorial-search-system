import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultipleSelect from './components/multipleSelectComponent';
import Header from './components/headerComponent';

function App() {
  return (
    <BrowserRouter >
    <Header/>
        <Routes>
          <Route path='/' element={<MultipleSelect/>} />
        </Routes>
    </BrowserRouter>
  );
}


// function App() {
//   return (
//     <>
//     <Header/>
//     <MultipleSelect/>
//     </>
//   );
// }

export default App;
