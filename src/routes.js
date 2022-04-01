import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
