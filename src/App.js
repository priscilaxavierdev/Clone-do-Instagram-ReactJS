import './App.css';
import Feed from './componentes/Feed/Feed';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo'
import LadoDireito  from './componentes/LadoDireito/LadoDireito';
import Stories from './componentes/Stories/Stories'

function App() {
  return (
    <div className="App">
      <div className='LadoEsquerdo'>
      < LadoEsquerdo />
      </div>

      <div className='Centro'>
      <Stories />
      <Feed />
      </div>
      <div className='LadoDireito'>
      <LadoDireito />
      </div>
    </div>
  );
}

export default App;
