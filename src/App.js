import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Frame from './pages/Frame';
import FrameEth from './pages/FrameEth';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/strategy-btc' element={<Frame />} />
          <Route path='/strategy-eth' element={<FrameEth />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
