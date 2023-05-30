import "./Stories.css";
import Story from "./componentes/Story";
import Imagem1 from "./imagens/gattaz.jpg";
import Imagem2 from "./imagens/reneerapp3.jpg";
import Imagem3 from "./imagens/sza.jpg";
import Imagem4 from "./imagens/gabriela guimarães.jpg";
import Imagem5 from "./imagens/gabs.jpg";
import Imagem6 from "./imagens/elayne.jpg";
import Imagem7 from "./imagens/kiana.jpg";
import Imagem8 from "./imagens/umi.jpg";

function Stories() {
    return (
        <div className="Stories">
            <Story NomeConta="carolgattaz" ImgStory={Imagem1} />
            <Story NomeConta="reneerapp" ImgStory={Imagem2} />
            <Story NomeConta="sza" ImgStory={Imagem3} />
            <Story NomeConta="gabiguima..." ImgStory={Imagem4} />
            <Story NomeConta="gab.augst..." ImgStory={Imagem5} />
            <Story NomeConta="elaynebaeta" ImgStory={Imagem6} />
            <Story NomeConta="kianalede" ImgStory={Imagem7} />
            <Story NomeConta="whoisumi" ImgStory={Imagem8} />
        </div>
    )
}

export default Stories;