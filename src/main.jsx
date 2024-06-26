import React from 'react';
import ReactDOM from 'react-dom';
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Content from './Components/Content.jsx';
import Career from './Components/Careers.jsx';
import AboutUs from './Components/About-us.jsx';
import Services from './Components/Services.jsx';
import { Home } from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';



const App = () => {
  const router = createHashRouter(createRoutesFromElements(

      <Route path='' element={<Layout/>}>

      <Route path='' element={<Home/>} />
      <Route path='services' element={<Services/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='' element={<Content/>} />
      <Route path='about-us' element={<AboutUs/>} />
      <Route path='' element={<Services/>} />
      <Route path='careers' element={<Career/>} />
      <Route path='' element={<Contact/>} />
    </Route>
  ));

  return (
    <React.StrictMode>
      
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
