import { useState } from 'react';
import Navbar from './Components/Navbaar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Third_page from './Components/Third_page';
import Second_page from './Components/second_page';
import Footer from './Components/Footer';
import Signup from './Components/Signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/contact' element={<Signup />} />
          <Route path='/Second_page' element={<Second_page />} />
          <Route path='/about' element={<Second_page />} /> 
          <Route path='/service' element={<Third_page />} /> 
          <Route path='/Third_page' element={<Third_page />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;



// import { useState } from 'react';
// import Navbar from './Components/Navbaar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Body from './Components/Body';
// import Third_page from './Components/Third_page';
// import Second_page from './Components/Second_page';
// import Footer from './Components/Footer';
// import Signup from './Components/Signup'

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Body />} />
//           <Route path='/contact' element={<Signup />} />
//           <Route path='/Second_page' element={<Second_page />} />
//           <Route path='/about' element={<Second_page />} />
//           <Route path='/service' element={<Third_page />} />
//           <Route path='/Third_page' element={<Third_page />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
