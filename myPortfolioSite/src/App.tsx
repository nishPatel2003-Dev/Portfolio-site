import './App.css'
import AppRoutes from "./routes/appRoutes.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
        <h1>
            Portfolio Site
        </h1>
        <Navbar />
        <AppRoutes />
    </>
  )
}

export default App
