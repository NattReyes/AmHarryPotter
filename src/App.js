import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './Components/HomeScreen/Home'
 
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;