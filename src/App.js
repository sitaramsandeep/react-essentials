import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Home, About, Events, Contact, Whoops, Services, CompanyHistory, Location } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="services" element={<Services/>}/>
          <Route path="companyHistory" element={<CompanyHistory/>}/>
          <Route path="location" element={<Location/>}/>
        </Route>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Whoops/>}/>
      </Routes>
    </div>
  );
}

export default App;
