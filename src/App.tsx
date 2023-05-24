import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import List from './components/List'
import Form from './components/Form'
import Landing from './components/Landing';
import Notfound from './components/NotFount';


function App() {

  return (
    <div>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/form' element={<Form />} />
          <Route path='/list' element={<List />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
  )
}

export default App
