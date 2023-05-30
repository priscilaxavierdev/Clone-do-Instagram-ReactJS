import './Feed.css';

import Post from './componentes/Post/Post';

import imagem1 from "./componentes/imgs/sos.jpg";
import imagem2 from "./componentes/imgs/sza.jpg";
import imagem3 from "./componentes/imgs/frank.jpg";
import imagem4 from './componentes/imgs/franciscooceano.jpg';
import imagem5 from './componentes/imgs/hertwo.jpg';
import imagem6 from './componentes/imgs/her2.jpg';
import imagem7 from './componentes/imgs/renneetwo.jpg';
import imagem8 from './componentes/imgs/reneerapp3.jpg';
import imagem9 from './componentes/imgs/supercombo.jpg';
import imagem10 from './componentes/imgs/remediosalbum.jpg';
export default function Feed() {
    return (
        <div className="Feed">

            <Post nomePerfil="sza" 
                  imagemPost={imagem1}
                  imagemPerfil={imagem2}
                  />
            <Post nomePerfil="blonded" 
                  imagemPost={imagem3}
                  imagemPerfil={imagem4}
            />

            <Post nomePerfil ="her" 
                  imagemPost ={imagem5}
                  imagemPerfil ={imagem6}
            />

            <Post nomePerfil="reneerapp" imagemPost={imagem7}
            imagemPerfil ={imagem8}
            
            />

            <Post nomePerfil="supercombo" imagemPost={imagem9}
            imagemPerfil ={imagem10}
            
            />
        </div>
    )
}