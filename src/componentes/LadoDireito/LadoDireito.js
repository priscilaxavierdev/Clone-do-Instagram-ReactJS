import imgPerfil from './imagens/pri.jpeg';
import BMTH from './imagens/bmth.jpg';
import Luccas from './imagens/luccas3.jpg';
import Budah from './imagens/budah3.jpg';
import Victoria from './imagens/victoriamonet.jpg';
import Flo from './imagens/flo.jpg';
import './LadoDireito.css';
export  default function LadoDireito(){
return(
    <>
    <div className="header-suggestion">
    <img src={imgPerfil}/>
    <div className="user-infos-suggestion">
        <div className="infos">
            <span>_priscilaxavierr</span>
            <p>priscila</p>
        </div>
        <span className="switch">Mudar</span>

    </div>
    </div>
    <div className="header-main-suggestion">
        <p>Sugestões para você</p>
        <span>Ver tudo</span>
    </div>
    <div className="user-suggestion">
      <div className="infos-suggestion">
        <img src={BMTH}/>
        <div className="info-suggestion">
            <span>bringmethehorizon</span>
            <p>Seguido por daylimns e outros 6 utilizad...</p>
        </div>
        <span className="follow">Seguir</span>
      </div>
      <div className="infos-suggestion">
        <img src={Luccas}/>
        <div className="info-suggestion">
            <span>luccascarlos</span>
            <p>Seguido por daylimns e outros 6 utilizad...</p>
        </div>
        <span className="follow">Seguir</span>
      </div>
      <div className="infos-suggestion">
        <img src={Budah}/>
        <div className="info-suggestion">
            <span>budah</span>
            <p>Seguido por daylimns e outros 6 utilizad...</p>
        </div>
        <span className="follow">Seguir</span>
      </div>
      <div className="infos-suggestion">
        <img src={Flo}/>
        <div className="info-suggestion">
            <span>flolikethis</span>
            <p>Seguido por sza, sashavilela e outros 6 utilizad...</p>
        </div>
        <span className="follow">Seguir</span>
      </div>
      <div className="infos-suggestion">
        <img src={Victoria}/>
        <div className="info-suggestion">
            <span>victoriamonet</span>
            <p>Seguido por sza, kehlani e outros 6 utilizad...</p>
        </div>
        <span className="follow">Seguir</span>
      </div>
    </div>
    <footer className="footer-suggestion">
    <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
    <p>&copy; 2021 INSTAGRAM FROM META</p>
    </footer>
    </>
)
}