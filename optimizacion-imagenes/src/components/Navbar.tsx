import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"
const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <h1 className="text-xl font-bold">Optimización de Imágenes</h1>
            <div>
                <Link className="mr-4" to="/">Inicio</Link>
                <Link className="mr-4" to="/ejercicio1">Ejercicio 1</Link>
                <Link className="mr-4" to="/ejercicio2">Ejercicio 2</Link>
                <Link className="mr-4" to="/ejercicio3">Ejercicio 3</Link>
                <Link className="mr-4" to="/ejercicio4">Ejercicio 4</Link>
                <Link className="mr-4" to="/ejercicio5">Ejercicio 5</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};
export default Navbar;