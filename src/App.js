import './styles/_styles.scss';

import NavbarPrin from './components/Navbar.js'; 
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavbarPrin />
      <ItemListContainer greeting="Bienvenido a la tienda de ropa" />
    </div>
  );
}

export default App;
