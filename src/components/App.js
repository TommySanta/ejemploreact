import logo from '../logo.svg';
import '../App.css';
import SumarNumero from './SumarNumero';
import MostrarImagen from './MostrarImagen';

function App() {
  return (
    <div>
    {MostrarImagen()} {SumarNumero()}
    </div>
  );
}

export default App;
