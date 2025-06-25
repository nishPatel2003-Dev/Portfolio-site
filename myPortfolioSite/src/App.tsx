import { useEffect } from 'react';
import './App.css'
import AppRoutes from './routes/appRoutes.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
    useEffect(() => {
        document.body.setAttribute('data-bs-theme', 'dark');
    }, []);

    return (
        <div>
            <h1>Portfolio Site</h1>
            <Navbar />
            <AppRoutes />
        </div>
    );
}

export default App;