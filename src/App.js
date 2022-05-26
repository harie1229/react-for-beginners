import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routers/Home';
import Detail from './routers/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie'>
          <Route path=':id' element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
