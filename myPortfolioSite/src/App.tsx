import { useEffect } from 'react';
import './App.css'
import AppRoutes from './routes/appRoutes.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import DarkMode from "./components/Buttons/Toggle/DarkMode/DarkMode.tsx";

function App() {
    useEffect(() => {
        document.body.setAttribute('data-bs-theme', 'dark');
    }, []);

    return (
        <div>
            <DarkMode />
            <h1>Portfolio Site</h1>
            <Navbar />
            <AppRoutes />
        </div>
    );
}

export default App;