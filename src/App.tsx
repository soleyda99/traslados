import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';

const Loading = lazy(() => import('./core/shared/loading/Loading'));
const Home = lazy(() => import('./core/components/home/Home'));
const Traslados = lazy(() => import('./core/components/traslados/Traslados'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Traslados />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
