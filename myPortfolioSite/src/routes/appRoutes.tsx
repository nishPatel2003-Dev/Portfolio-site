import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/About.tsx';


const AppRoutes = () => (

    <Routes>
        <Route path="/about" element={<AboutPage />} />
    </Routes>
);

export default AppRoutes;
