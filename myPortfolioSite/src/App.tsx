import './App.css'
import AppRoutes from "./routes/appRoutes.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
        <Navbar />
        <AppRoutes />
    </>
  )
}

export default App
