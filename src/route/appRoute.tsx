import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Survey from '../pages/survey';
import Score from '../pages/score';
import Register from '../pages/register';
import ComingSoon from '../pages/comingSoon';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/score" element={<Score />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
};

export default AppRoutes;