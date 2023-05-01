
import './App.css';
import Calculator from './components/calculator/Calculator';
import Cabecalho from './components/utils/layout/Cabecalho';
import Rodape from './components/utils/layout/Rodape';


function App() {
  return (
    <div className="App">
    <Cabecalho name="EBAC" />
    <Calculator/ >
    <Rodape name="Lucas Alves" />
    </div>
  );
}

export default App;
