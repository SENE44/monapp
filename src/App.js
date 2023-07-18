import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Accueille from './accueille';
import P2 from './p2'
function App() {
  return(
  <div>   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueille/>}/>
        <Route path='/detail' element={<P2/>}/>

      </Routes>
    </BrowserRouter>
    </div> 
  )
 
}

export default App;

