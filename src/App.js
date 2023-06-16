import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './pages/Create';
import Notes from './pages/Notes';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Notes/>} ></Route>
      <Route path='create' element={<Create/>} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
