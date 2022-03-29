import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignIn from './pages/SignIn';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
